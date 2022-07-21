import React, {
    FC, useContext, useEffect, useId, useRef, useState,
} from 'react';
import { TooltipContainerHandle } from 'src/components/tooltip/container';
import { TooltipContent } from 'src/components/tooltip/content';
import { TooltipPosEnum } from 'src/components/tooltip/general';
import { Context } from 'src/store/context';
import { ConnectNetworkButton } from './Button';
import styles from './styles.module.scss';
import { ConnectNetworkItem } from './types';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectNetwork: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}) => {
    const { items, selectedKey, onSelect } = useContext(Context).connectNetwork;

    const id = useId();
    const tooltipRef = useRef<TooltipContainerHandle>(null);

    const [activeNetwork, setActiveNetwork] = useState<ConnectNetworkItem | undefined>();
    useEffect(() => {
        setActiveNetwork(items.find(({ key }) => key === selectedKey));
    }, [selectedKey, items]);

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
            pos={TooltipPosEnum.Left}
        >
            <div className={styles.title}>Swap Network</div>
            <div className={styles.list}>
                {items.map((network) => {
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
                                        aria-hidden
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
