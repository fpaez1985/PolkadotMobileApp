import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useApiContext } from './ApiContext';

const BalanceDisplay = ({ address }) => {
    const [balance, setBalance] = useState(null);
    const api = useApiContext();

    useEffect(() => {
        if (address) {
            fetchBalance(address);
        }
    }, [address]);

    async function getDecimals() {
        const decimals = api.registry.chainDecimals;
        return decimals;
    }

    function formatBalance(balance, decimals) {
        const balanceInDOT = balance / Math.pow(10, decimals);
        return balanceInDOT.toFixed(4) + " WND";
    }


    const fetchBalance = async (address) => {
        const decimals = await getDecimals();
        const { data: balance } = await api.query.system.account(address);
        setBalance(formatBalance(balance.free.toString(), decimals));
        setBalance(formattedBalance);
    };

    console.log('address balance', address, balance);

    return (
        <View>
            {address && balance ? (
                <Text>Balance for {address}: {balance}</Text>
            ) : (
                <Text>Enter a seed phrase to display balance</Text>
            )}
        </View>
    );
};

export default BalanceDisplay;
