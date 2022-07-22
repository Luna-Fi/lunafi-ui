import React, { FC } from 'react';
import { IconLunaFi } from 'src/components/icons/LunaFi';
import { NumberFormat } from 'src/components/number/format';
import { PreviewNetworkLabel, PreviewNetworkLabelProps } from '../../preview/network-label';
import styles from './Info.module.scss';

export interface FarmItemInfoProps {
    icon: string;
    name: string;
    label: string;
    network?: PreviewNetworkLabelProps;
    deposited?: number;
    tvl?: number;
    dailyRewards?: number;
    apy?: number;
}

export const FarmItemInfo: FC<FarmItemInfoProps> = ({
    icon,
    name,
    label,
    network,
    deposited,
    tvl,
    dailyRewards,
    apy,
}) => (
    <div className={styles.farm_item_info}>

        <div className={styles.head} aria-hidden>
            <div className={`${styles.col} ${styles.col_pool}`}>Pool</div>
            <div className={`${styles.col} ${styles.col_deposited}`}>Deposited</div>
            <div className={`${styles.col} ${styles.col_tvl}`}>TVL</div>
            <div className={`${styles.col} ${styles.col_rewards}`}>Rewards</div>
            <div className={`${styles.col} ${styles.col_apy}`}>APY</div>
        </div>

        <div className={styles.body} aria-label={name}>

            <div className={`${styles.col} ${styles.col_pool}`} aria-label="Pool">
                <div className={styles.pool}>
                    <div className={styles.pool__icon}>
                        {icon && <img src={icon} alt={name} aria-hidden />}
                    </div>
                    <div className={styles.pool__name}>
                        {name}
                    </div>
                    {label && (
                        <div className={styles.pool__label}>
                            {label}
                        </div>
                    )}
                    {network && (
                        <PreviewNetworkLabel
                            {...network}
                            size="large"
                            className={styles.pool__network}
                        />
                    )}
                </div>
            </div>

            <div className={`${styles.col} ${styles.col_deposited}`} aria-label="Deposited">
                <div className={styles.title}>Deposited</div>
                {deposited ? <NumberFormat value={deposited} /> : '-'}
            </div>

            <div className={`${styles.col} ${styles.col_tvl}`} aria-label="TVL">
                <div className={styles.title}>TVL</div>
                {tvl ? <NumberFormat value={tvl} prefix="$" /> : '-'}
            </div>

            <div className={`${styles.col} ${styles.col_rewards}`} aria-label="Rewards">
                <div className={styles.title}>Rewards</div>
                {dailyRewards ? (
                    <div className={styles.daily_rewards}>
                        <IconLunaFi
                            className={styles.daily_rewards__icon}
                            aria-hidden
                        />
                        <div className={styles.daily_rewards__content}>
                            <div className={styles.daily_rewards__name}>LFI</div>
                            <div className={styles.daily_rewards__value}>
                                <NumberFormat value={dailyRewards} />
                                {' '}
                                LFI / D
                            </div>
                        </div>
                    </div>
                ) : '-'}
            </div>

            <div className={`${styles.col} ${styles.col_apy}`} aria-label="APY">
                <div className={styles.title}>APY</div>
                {apy ? (
                    <div
                        className={[
                            styles.apy,
                            apy > 0 ? styles.positive : styles.negative,
                        ].join(' ')}
                    >
                        <span><NumberFormat value={apy} suffix="%" hasSignPrefix /></span>
                        <IconLunaFi className={styles.apy__icon} aria-hidden />
                    </div>
                ) : '-'}
            </div>

        </div>

    </div>
);
