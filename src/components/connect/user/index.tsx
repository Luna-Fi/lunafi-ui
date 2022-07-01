import React, { FC } from 'react';
import { ConnectUserButton } from './button';

export interface ConnectUserProps {
    address: string;
}

export interface Props extends ConnectUserProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectUser: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    address,
}) => (
    <ConnectUserButton
        appearAnimation={appearAnimation}
        appearAnimationOn={appearAnimationOn}
        address={address}
    />
);
