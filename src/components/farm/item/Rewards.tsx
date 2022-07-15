import React, { FC } from 'react';
import { Button } from 'src/components/button';
import styles from './Rewards.module.scss';

export interface FarmItemRewardsProps {
    value: number;
    onAddLiquidity: () => void;
    onRemoveLiquidity: () => void;
    onClaimRewards: () => void;
}

export interface FarmItemFormHandle {
    getInputValue: () => (number | undefined);
}

export const FarmItemRewards: FC<FarmItemRewardsProps> = ({
    value,
    onAddLiquidity,
    onRemoveLiquidity,
    onClaimRewards,
}) => (
    <div aria-label="Rewards">

        <div className={styles.head}>
            <Button
                tag="button"
                variant="success"
                size="medium"
                onClick={() => {
                    onAddLiquidity();
                }}
            >
                Add Liquidity
            </Button>
            <Button
                tag="button"
                variant="danger"
                size="medium"
                onClick={() => {
                    onRemoveLiquidity();
                }}
            >
                Remove Liquidity
            </Button>
        </div>

        <div className={styles.value}>
            Rewards:
            {' '}
            <b>{value}</b>
            {' '}
            <i>LFI</i>
        </div>

        <Button
            tag="button"
            variant="secondary"
            disabled={!value}
            size="large"
            className={styles.button}
            onClick={() => {
                onClaimRewards();
            }}
        >
            Claim Rewards
        </Button>

    </div>
);
