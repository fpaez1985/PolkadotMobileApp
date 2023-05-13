import React, { createContext, useContext, useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';

const ApiContext = createContext(null);

export const useApiContext = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const [api, setApi] = useState(null);

    useEffect(() => {
        const connectApi = async () => {
            const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
            const api = await ApiPromise.create({ provider: wsProvider });

            setApi(api);
        };

        connectApi();
    }, []);

    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
