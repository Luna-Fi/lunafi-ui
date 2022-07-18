import React, { FC, useRef } from 'react';
import { Button } from 'src/components/button';
import { ButtonOutline } from 'src/components/button/outline';
import { FarmItemForm, FarmItemFormHandle } from './Form';
import { FarmItemInfo, FarmItemInfoProps } from './Info';
import { FarmItemRewards, FarmItemRewardsProps } from './Rewards';
import styles from './index.module.scss';

export interface FarmItemProps extends FarmItemInfoProps {
    balance: number;
    form: {
        max: number;
        onSubmit: (amount: number | undefined) => void;
        disabled: boolean;
        submitText: string;
    };
    withdraw: {
        max: number;
        onWithdraw: (amount: number | undefined) => void;
        onWithdrawAll: () => void;
    };
    rewards: FarmItemRewardsProps;
}

export const FarmItem: FC<FarmItemProps> = ({
    icon,
    name,
    label,
    network,
    deposited,
    tvl,
    dailyRewards,
    apy,
    balance,
    form,
    withdraw,
    rewards,
}) => {
    const formFormRef = useRef<FarmItemFormHandle>(null);
    const withdrawFormRef = useRef<FarmItemFormHandle>(null);

    return (
        <div className={styles.farm_item}>
            <FarmItemInfo
                icon={icon}
                name={name}
                label={label}
                network={network}
                deposited={deposited}
                tvl={tvl}
                dailyRewards={dailyRewards}
                apy={apy}
            />
            <div className={styles.forms}>

                <div className={styles.form} aria-label={form.submitText}>
                    <FarmItemForm
                        ref={formFormRef}
                        label={label}
                        balance={balance}
                        max={form.max}
                        icon={icon}
                        renderButton={(val) => (
                            <Button
                                tag="button"
                                variant="primary"
                                size="large"
                                onClick={() => {
                                    form.onSubmit(val);
                                }}
                                disabled={form.disabled}
                            >
                                {form.submitText}
                            </Button>
                        )}
                    />
                </div>

                <div className={styles.form} aria-label="Withdraw">
                    <FarmItemForm
                        ref={withdrawFormRef}
                        label={label}
                        balance={balance}
                        max={withdraw.max}
                        icon={icon}
                        renderButton={(val) => (
                            <>
                                <Button
                                    tag="button"
                                    variant="secondary"
                                    size="large"
                                    onClick={() => {
                                        withdraw.onWithdraw(val);
                                    }}
                                    disabled={!val}
                                >
                                    Withdraw
                                </Button>
                                <ButtonOutline
                                    tag="button"
                                    variant="dark"
                                    size="large"
                                    onClick={() => {
                                        withdraw.onWithdrawAll();
                                    }}
                                    disabled={!withdraw.max}
                                >
                                    Withdraw All
                                </ButtonOutline>
                            </>
                        )}
                    />
                </div>

                <div className={styles.form}>
                    <FarmItemRewards
                        {...rewards}
                    />
                </div>

            </div>
        </div>
    );
};
