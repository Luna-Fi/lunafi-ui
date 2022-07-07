import React, {
    FC, useEffect, useId, useRef, useState,
} from 'react';
import { TooltipContent, TooltipContentHandle } from 'src/components/tooltip/content';
import { ConnectNetworkButton } from './button';
import styles from './styles.module.scss';

export interface IConnectNetworkItem {
    key: string | number;
    name: string;
    previewSrc?: string;
    iconSrc?: string;
    color?: string;
}

export interface ConnectNetworkProps {
    networks: IConnectNetworkItem[];
    onSelect: (network?: IConnectNetworkItem) => void;
    selectedKey: IConnectNetworkItem['key'];
}

export interface Props extends ConnectNetworkProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectNetwork: FC<Props> = ({
    networks = [],
    appearAnimation,
    onSelect,
    selectedKey,
    appearAnimationOn,
}) => {
    const id = useId();
    const tooltipRef = useRef<TooltipContentHandle>(null);

    const [activeNetwork, setActiveNetwork] = useState<IConnectNetworkItem | undefined>();
    useEffect(() => {
        setActiveNetwork(networks.find(({ key }) => key === selectedKey));
    }, [selectedKey, networks]);

    return (
        <TooltipContent
            ref={tooltipRef}
            trigger={(
                <ConnectNetworkButton
                    appearAnimation={appearAnimation}
                    appearAnimationOn={appearAnimationOn}
                    iconSrc={activeNetwork?.iconSrc}
                    color={activeNetwork?.color}
                />
            )}
            className={styles.tooltip}
        >
            <div className={styles.title}>Swap Network</div>
            <div className={styles.list}>
                {networks.map((network) => {
                    const isActive = network.key === activeNetwork?.key;
                    return (
                        <label
                            key={network.name}
                            className={[
                                styles.item,
                                isActive && styles.active,
                            ].join(' ')}
                            htmlFor={`${id}-${network.key}`}
                        >
                            <span className={styles.icon}>
                                {network.previewSrc && (
                                    <img
                                        src={network.previewSrc}
                                        alt={network.name}
                                    />
                                )}
                            </span>
                            {network.name}
                            <span
                                className={[
                                    styles.checked,
                                    isActive && styles.active,
                                ].join(' ')}
                            />
                            <input
                                id={`${id}-${network.key}`}
                                type="radio"
                                name={`${id}-network`}
                                value={network.name}
                                checked={isActive}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        onSelect(network);
                                    }
                                    tooltipRef.current?.close();
                                }}
                            />
                        </label>
                    );
                })}
            </div>
        </TooltipContent>
    );
};
