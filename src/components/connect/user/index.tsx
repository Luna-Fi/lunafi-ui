import React, { FC } from 'react';
import { ConnectUserButton } from './button';

export interface ConnectUserProps {
    username: string;
}

export interface Props extends ConnectUserProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectUser: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    username,
}) => (
    <ConnectUserButton
        appearAnimation={appearAnimation}
        appearAnimationOn={appearAnimationOn}
        username={username}
    />
);
