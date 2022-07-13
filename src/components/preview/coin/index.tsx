import React, {
    FC, HTMLAttributes, useRef, useState,
} from 'react';
import { BoxDirOverlayHover } from 'src/components/box/dir-overlay-hover';
import { BoxOutline } from 'src/components/box/outline';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { NumberCounter } from 'src/components/number/counter';
import { NumberFormat } from 'src/components/number/format';
import { vevetApp } from 'src/utils/vevet';
import { PreviewNetworkLabel, PreviewNetworkLabelProps } from '../network-label';
import styles from './styles.module.scss';

export interface PreviewCoinProps {
    img: string;
    name: string;
    value: number;
    network: PreviewNetworkLabelProps;
    earning?: {
        percent?: number;
        lfiPercent?: number;
    }
    onDepositClick?: () => void;
}

export interface Props extends PreviewCoinProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * @default 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * @default true
     */
    useOverlayHover?: boolean;
    style?: HTMLAttributes<HTMLDivElement>['style'];
    className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const PreviewCoin: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    img,
    name,
    value,
    network,
    earning,
    onDepositClick,
    size = 'medium',
    useOverlayHover = true,
    ...tagProps
}) => {
    const domRef = useRef<HTMLDivElement>(null);

    // states
    const [isHovered, setIsHovered] = useState(false);

    // classnames
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
        size === 'large' ? styles.large : '',
        size === 'medium' ? styles.medium : '',
        size === 'small' ? styles.small : '',
    ].join(' ');

    return (
        <BoxOutline
            ref={domRef}
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            className={[
                styles.preview_coin,
                classNames,
            ].join(' ')}
            {...tagProps}
            onMouseEnter={() => !vevetApp.isMobile && setIsHovered(true)}
            onMouseLeave={() => !vevetApp.isMobile && setIsHovered(false)}
        >
            <BoxDirOverlayHover
                className={`${styles.wrapper} ${classNames}`}
                enableHover={useOverlayHover}
            >

                <div className={styles.head}>
                    <div className={styles.head__row}>
                        {img && (
                            <img
                                className={[
                                    styles.img,
                                    classNames,
                                ].join(' ')}
                                src={img}
                                alt={name}
                                width="50"
                                height="50"
                                loading="lazy"
                            />
                        )}
                        <div>
                            <div className={`${styles.name} ${classNames}`}>{name}</div>
                            <div className={`${styles.value} ${classNames}`}>
                                {appearAnimation ? (
                                    <NumberCounter
                                        animation={appearAnimationOn}
                                        prefix="$"
                                        value={value}
                                    />
                                ) : (
                                    <NumberFormat
                                        prefix="$"
                                        value={value}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <PreviewNetworkLabel
                        {...network}
                        className={styles.head__network}
                        size={size === 'large' ? 'large' : 'medium'}
                    />
                </div>

                {earning
                    ? (
                        <div className={`${styles.earning} ${classNames}`}>
                            <div className={`${styles.earning__title} ${classNames}`}>Earning rate</div>
                            <ul className={`${styles.earning__list} ${classNames}`}>
                                {earning.percent ? (
                                    <li>
                                        {appearAnimation ? (
                                            <NumberCounter
                                                animation={appearAnimationOn}
                                                value={earning.percent}
                                                hasSignPrefix
                                                suffix="%"
                                            />
                                        ) : (
                                            <NumberFormat
                                                value={earning.percent}
                                                hasSignPrefix
                                                suffix="%"
                                            />
                                        )}
                                    </li>
                                ) : ''}
                                {earning.lfiPercent ? (
                                    <li className={styles.earning__lfi}>
                                        {appearAnimation ? (
                                            <NumberCounter
                                                animation={appearAnimationOn}
                                                value={earning.lfiPercent}
                                                hasSignPrefix
                                                suffix="% LFI"
                                            />
                                        ) : (
                                            <NumberFormat
                                                value={earning.lfiPercent}
                                                hasSignPrefix
                                                suffix="% LFI"
                                            />
                                        )}
                                    </li>
                                ) : ''}
                            </ul>
                        </div>
                    )
                    : ''}

                {onDepositClick && (
                    <div className={styles.deposit}>
                        <ButtonSvgCircleFill
                            appearAnimation={appearAnimation}
                            appearAnimationOn={appearAnimationOn}
                            tag="button"
                            forceHover={isHovered}
                            colorVariant="gradient"
                            hasStaticFill={false}
                            onClick={onDepositClick}
                            size={size === 'small' ? 'small' : 'medium'}
                        >
                            Deposit
                        </ButtonSvgCircleFill>
                    </div>
                )}

            </BoxDirOverlayHover>
        </BoxOutline>
    );
};
