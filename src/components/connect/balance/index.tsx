import React, {
    FC, PropsWithChildren,
} from 'react';
import { TooltipContent } from 'src/components/tooltip/content';
import { ConnectBalanceButton } from './button';
import styles from './styles.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    balance: number;
}

export const ConnectBalance: FC<PropsWithChildren<Props>> = ({
    appearAnimation,
    appearAnimationOn,
    balance,
    children,
}) => (
    <TooltipContent
        className={styles.tooltip}
        trigger={(
            <ConnectBalanceButton
                appearAnimation={appearAnimation}
                appearAnimationOn={appearAnimationOn}
                balance={balance}
            />
        )}
    >
        {children}
    </TooltipContent>
);
