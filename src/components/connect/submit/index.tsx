import React, {
    FC, useContext,
} from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { Context } from 'src/store/context';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectSubmit: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}) => {
    const { setShown } = useContext(Context).system.connectWallet;

    return (
        <ButtonSvgCircleFill
            tag="button"
            onClick={() => {
                setShown(true);
            }}
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
        >
            Connect
        </ButtonSvgCircleFill>
    );
};
