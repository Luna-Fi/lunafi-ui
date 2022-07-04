import React, { FC } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import styles from './styles.module.scss';

export interface BoxBannerProps {
    header?: string;
    description?: string;
    href?: string;
    media?: {
        img?: string;
    }
}

export const BoxBanner: FC<BoxBannerProps> = ({
    header,
    description,
    href,
    media,
}) => {
    const classNames = [
        href ? styles.has_link : '',
    ].join(' ');

    return (
        <section className={styles.box_banner}>
            {media && (
                <div className={styles.bg}>
                    {media.img && (
                        <img src={media.img} alt={header || ''} />
                    )}
                </div>
            )}
            <div className={styles.container}>
                {header && (
                    <h2 className={styles.header}>{header}</h2>
                )}
                <div className={`${styles.content} ${classNames}`}>
                    <div className={styles.desc}>
                        {description}
                    </div>
                    <div className={styles.link}>
                        {href && (
                            <ButtonSvgCircleFill
                                tag="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {href}
                            </ButtonSvgCircleFill>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
