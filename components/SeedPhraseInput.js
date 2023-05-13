import React, { useState, useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Keyring } from '@polkadot/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cryptoWaitReady } from '@polkadot/util-crypto';

const SeedPhraseInput = ({ setAddress }) => {
    const [inputSeedPhrase, setInputSeedPhrase] = useState('');

    useEffect(() => {
        const initCrypto = async () => {
            await cryptoWaitReady();
            getStoredSeedPhrase();
        };
        initCrypto();
    }, []);

    const getAddressFromSeedPhrase = (seedPhrase) => {
        const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
        const pair = keyring.addFromUri(seedPhrase);
        return pair.address;
    };

    const importSeedPhrase = (seedPhrase) => {
        setAddress(getAddressFromSeedPhrase(seedPhrase));
        storeSeedPhrase(seedPhrase);
    };

    const storeSeedPhrase = async (seedPhrase) => {
        try {
            await AsyncStorage.setItem('seedPhrase', seedPhrase);
        } catch (error) {
            console.error('Error storing seed phrase: ', error);
        }
    };

    const getStoredSeedPhrase = async () => {
        try {
            const storedSeedPhrase = await AsyncStorage.getItem('seedPhrase');
            if (storedSeedPhrase !== null) {
                setInputSeedPhrase(storedSeedPhrase);
                setAddress(getAddressFromSeedPhrase(storedSeedPhrase));
            }
        } catch (error) {
            console.error('Error retrieving seed phrase: ', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your seed phrase"
                onChangeText={setInputSeedPhrase}
                value={inputSeedPhrase}
            />
            <Button
                title="Import Seed Phrase"
                onPress={() => importSeedPhrase(inputSeedPhrase)}
            />
        </View>
    );
};

export default SeedPhraseInput;
