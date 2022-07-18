import React, {
    FC, createContext, PropsWithChildren, useState, useMemo,
} from 'react';
import { StoreData, StoreProps } from './types';

const defaultState: StoreData = {
    authorized: false,
    connectNetwork: {
        items: [],
        selectedKey: '',
        onSelect() { },
    },
    connectWallet: {
        wallets: [],
        onSelect: () => {},
    },
    lfi: {
        price: 0,
        info: [],
        explorerHref: '',
    },
    buy: {
        items: [],
    },
    user: {
        address: '',
        network: '',
        explorerHref: '',
        disconnectCallback: () => {},
    },
    addToMetamaskCallback: () => {},
    links: {
        privacy: '',
        terms: '',
    },
    system: {
        connectWallet: {
            shown: false,
            setShown() { },
        },
    },
};

export const Context = createContext(defaultState);

export const Provider: FC<PropsWithChildren<{
    value: StoreProps
}>> = ({
    children,
    value,
}) => {
    const [connectWalletShown, setConnectWalletShown] = useState(false);

    const val: StoreData = useMemo(() => ({
        ...value,
        system: {
            connectWallet: {
                shown: connectWalletShown,
                setShown: setConnectWalletShown,
            },
        },
    }), [connectWalletShown, value]);

    return (
        <Context.Provider value={val}>
            {children}
        </Context.Provider>
    );
};
