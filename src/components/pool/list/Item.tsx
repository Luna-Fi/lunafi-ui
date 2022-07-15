import React, {
    FC, useCallback, useState,
} from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { NumberFormat } from 'src/components/number/format';
import { PreviewNetworkLabel, PreviewNetworkLabelProps } from 'src/components/preview/network-label';
import { media } from 'src/utils/media';
import { useOnResize } from 'src/utils/resize';
import styles from './Item.module.scss';

export interface PoolsListItemProps {
    key: string | number;
    href: string;
    icon: string;
    name: string;
    label: string;
    network?: PreviewNetworkLabelProps;
    liquidity?: number;
    myLiquidity?: number;
    apy?: {
        value: number;
        lfiValue: number;
    };
}

export const PoolsListItem: FC<PoolsListItemProps> = ({
    href,
    icon,
    name,
    label,
    network,
    liquidity,
    myLiquidity,
    apy,
}) => {
    const [networkLabelSize, setNetworkLabelSize] = useState<'large' | 'medium' | 'small'>('large');

    const resize = useCallback(() => {
        if (media.isXS()) {
            setNetworkLabelSize('small');
        } else if (media.isSM()) {
            setNetworkLabelSize('medium');
        } else {
            setNetworkLabelSize('large');
        }
    }, []);
    useOnResize(() => {
        resize();
    }, [resize]);

    return (
        <section
            className={[
                styles.pools_list_item,
                styles.row,
            ].join(' ')}
            aria-label={name}
        >

            <div className={`${styles.col} ${styles.col_pool}`}>
                <div className={styles.pool}>
                    <div className={styles.pool__icon}>
                        {icon && <img src={icon} alt={name} aria-hidden />}
                    </div>
                    <div className={styles.pool__info}>
                        <h3 className={styles.pool__name}>
                            {name}
                        </h3>
                        {label && (
                            <div className={styles.pool__label}>
                                {label}
                            </div>
                        )}
                        {network && (
                            <PreviewNetworkLabel
                                {...network}
                                className={styles.pool__network}
                                size={networkLabelSize}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`${styles.col} ${styles.col_my_liquidity}`}
                aria-label="Liquidity"
            >
                {liquidity ? <NumberFormat value={liquidity} prefix="$" /> : '-'}
            </div>

            <div
                className={`${styles.col} ${styles.col_liquidity}`}
                aria-label="My liquidity"
            >
                {myLiquidity ? <NumberFormat value={myLiquidity} prefix="$" /> : '-'}
            </div>

            <div
                className={`${styles.col} ${styles.col_apy}`}
                aria-label="APY"
            >
                {apy ? (
                    <div className={styles.apy}>
                        <NumberFormat value={apy.value} suffix="%" hasSignPrefix />
                        <div
                            className={styles.apy__lfi}
                            aria-label="LFI"
                        >
                            <NumberFormat value={apy.lfiValue} suffix="%" />
                        </div>
                    </div>
                ) : '-'}
            </div>

            <div className={`${styles.col} ${styles.col_deposit}`}>
                <ButtonSvgCircleFill
                    tag="a"
                    href={href}
                    hasStaticFill={false}
                    colorVariant="gradient"
                    size="small"
                    className={styles.deposit_button}
                >
                    Deposit
                </ButtonSvgCircleFill>
            </div>

            <div className={`${styles.col} ${styles.col_nav}`}>
                <a
                    href={href}
                    aria-label="More details"
                    className={[
                        styles.more_details,
                    ].join(' ')}
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.2461 8.91613C14.1017 8.77181 13.9059 8.69074 13.7018 8.69074C13.4977 8.69074 13.3019 8.77181 13.1575 8.91613L10.6226 11.4511L8.08757 8.91613C7.94238 8.7759 7.74792 8.69831 7.54608 8.70007C7.34424 8.70182 7.15116 8.78278 7.00843 8.92551C6.8657 9.06824 6.78474 9.26132 6.78299 9.46316C6.78123 9.665 6.85883 9.85946 6.99905 10.0046L10.0783 13.0839C10.2227 13.2282 10.4184 13.3093 10.6226 13.3093C10.8267 13.3093 11.0225 13.2282 11.1668 13.0839L14.2461 10.0046C14.3904 9.86028 14.4714 9.66451 14.4714 9.46039C14.4714 9.25626 14.3904 9.06049 14.2461 8.91613Z" fill="white" />
                        <rect width="20" height="20" rx="10" transform="matrix(-1 0 0 1 20.6226 1)" stroke="white" strokeWidth="0.962264" />
                    </svg>
                </a>
            </div>

        </section>
    );
};
