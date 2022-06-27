import { FC } from 'react';
export interface ConnectUserProps {
    username: string;
}
export interface Props extends ConnectUserProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}
export declare const ConnectUser: FC<Props>;
