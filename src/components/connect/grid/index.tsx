import React, { FC, useContext } from 'react';
import { CoinLFI } from 'src/components/coin/lfi';
import { Context } from 'src/store/context';
import { ConnectNetwork } from '../network';
import { ConnectSubmit } from '../submit';
import { ConnectUser } from '../user';
import styles from './styles.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectGrid: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}: Props) => {
    const { authorized } = useContext(Context);

    return (
        <div className={styles.connect_grid}>
            <div className={styles.row}>
                <div className={styles.coin}>
                    <CoinLFI
                        appearAnimation={appearAnimation}
                        appearAnimationOn={appearAnimationOn}
                    />
                </div>
                <div className={styles.network}>
                    <ConnectNetwork
                        appearAnimation={appearAnimation}
                        appearAnimationOn={appearAnimationOn}
                    />
                </div>
            </div>
            <div className={styles.user}>
                {authorized ? (
                    <ConnectUser
                        appearAnimation={appearAnimation}
                        appearAnimationOn={appearAnimationOn}
                    />
                ) : (
                    <ConnectSubmit
                        appearAnimation={appearAnimation}
                        appearAnimationOn={appearAnimationOn}
                    />
                )}
            </div>
        </div>
    );
};
