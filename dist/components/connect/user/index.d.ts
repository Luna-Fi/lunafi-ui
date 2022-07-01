import { FC, PropsWithChildren } from 'react';
export interface ConnectUserProps {
    address: string;
}
export interface Props extends ConnectUserProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}
export declare const ConnectUser: FC<PropsWithChildren<Props>>;
