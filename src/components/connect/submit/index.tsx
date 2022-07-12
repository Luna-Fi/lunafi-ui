import React, {
    FC, useContext,
} from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { Context } from 'src/store/context';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    text?: string;
    size?: 'small' | 'medium' | 'large';
}

export const ConnectSubmit: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    text,
    ...buttonProps
}) => {
    const { setShown } = useContext(Context).system.connectWallet;

    return (
        <ButtonSvgCircleFill
            {...buttonProps}
            tag="button"
            onClick={() => {
                setShown(true);
            }}
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
        >
            {text || 'Connect'}
        </ButtonSvgCircleFill>
    );
};
