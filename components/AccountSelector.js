import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountSelector = () => {
    const [accounts, setAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const navigation = useNavigation();

    const addAccount = (address) => {
        setAccounts([...accounts, address]);
    };

    const handleAddAccountPress = () => {
        navigation.navigate('AddAccount');
    };

    return (
        <View>
            {accounts.length > 0 ? (
                <Picker
                    selectedValue={selectedAccount}
                    onValueChange={(itemValue) => setSelectedAccount(itemValue)}
                >
                    {accounts.map((account, index) => (
                        <Picker.Item key={index} label={account} value={account} />
                    ))}
                </Picker>
            ) : (
                <Text>No accounts added yet</Text>
            )}
            <TouchableOpacity onPress={handleAddAccountPress}>
                <Text>Add new account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AccountSelector;
