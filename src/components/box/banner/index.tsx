import React, { FC } from 'react';
import { Button } from 'src/components/button';
import styles from './styles.module.scss';

export interface BoxBannerProps {
    header?: string;
    description?: string;
    href?: string;
    media?: {
        img?: string;
        mp4?: string;
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
                    {media.mp4 && (
                        <video
                            disablePictureInPicture
                            playsInline
                            preload="auto"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={media.mp4} type="video/mp4" />
                        </video>
                    )}
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
                            <Button
                                tag="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="light"
                                size="small"
                            >
                                Learn More
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
