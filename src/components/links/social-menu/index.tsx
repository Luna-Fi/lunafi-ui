import React, { FC } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { SocialLinks } from '../types';
import styles from './styles.module.scss';

export interface LinksSocialMenuProps extends SocialLinks {}

export interface Props extends LinksSocialMenuProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const LinksSocialMenu: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}) => (
    <ButtonSvgCircleFill
        className={styles.button}
        aria-label="Social links"
        hasStaticFill={false}
        colorVariant="gradient"
        appearAnimation={appearAnimation}
        appearAnimationOn={appearAnimationOn}
    >
        <span className={styles.icon} />
    </ButtonSvgCircleFill>
);
