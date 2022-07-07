import { FC, ReactNode } from 'react';
export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    coin: ReactNode;
    network: ReactNode;
    connect: ReactNode;
}
export declare const ConnectGrid: FC<Props>;
