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
    const id = useId();
    const [activeNetwork, setActiveNetwork] = useState(
        networks.find(() => true),
    );
    const tooltipRef = useRef<TooltipContentHandle>(null);

    useEffect(() => {
        if (activeNetwork) {
            onSelect(activeNetwork);
        }
    }, [activeNetwork, onSelect]);

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
                    const isActive = activeNetwork?.name === network.name;
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
                                        setActiveNetwork(network);
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
