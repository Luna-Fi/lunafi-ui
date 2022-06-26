import React, { FC, useEffect, useState } from 'react';
import { ConnectNetworkButton } from './button';

export interface IConnectNetworkItem {
    name: string;
    previewSrc?: string;
    iconSrc?: string;
}

export interface ConnectNetworkProps {
    networks: IConnectNetworkItem[];
    onSelect: (network: IConnectNetworkItem) => void;
}

export interface Props extends ConnectNetworkProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectNetwork: FC<Props> = ({
    networks = [],
    appearAnimation,
    onSelect,
    appearAnimationOn,
}) => {
    const [activeNetwork] = useState(
        networks.find(() => true),
    );

    useEffect(() => {
        if (activeNetwork) {
            onSelect(activeNetwork);
        }
    }, [activeNetwork, onSelect]);

    return (
        <ConnectNetworkButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            iconSrc={activeNetwork?.iconSrc}
        />
    );
};
