import React, { FC } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { TooltipContent } from 'src/components/tooltip/content';
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
    ...social
}) => (
    <TooltipContent
        trigger={(
            <ButtonSvgCircleFill
                tag="button"
                className={styles.button}
                aria-label="Social links"
                hasStaticFill={false}
                colorVariant="gradient"
                appearAnimation={appearAnimation}
                appearAnimationOn={appearAnimationOn}
            >
                <span className={styles.icon} />
            </ButtonSvgCircleFill>
        )}
        usePadding={false}
        className={styles.tooltip}
    >
        <ul className={styles.links}>

            {social.docs && (
                <li>
                    <a
                        href={social.docs}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 13L9 15L10 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 13L15 15L14 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Docs
                    </a>
                </li>
            )}

            {social.twitter && (
                <li>
                    <a
                        href={social.twitter}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 4.01001C21 4.50001 20.02 4.69901 19 5.00001C17.879 3.73501 16.217 3.66501 14.62 4.26301C13.023 4.86101 11.977 6.32301 12 8.00001V9.00001C8.755 9.08301 5.865 7.60501 4 5.00001C4 5.00001 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.5527 20.189 9.28987 20.182 8.02201C20.18 7.77301 21.692 5.25001 22 4.00901V4.01001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Twitter
                    </a>
                </li>
            )}

            {social.telegram && (
                <li>
                    <a
                        href={social.telegram}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Telegram
                    </a>
                </li>
            )}

            {social.discord && (
                <li>
                    <a
                        href={social.discord}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 7.5C11 6.5 13 6.5 16.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 16.5C10.5 17.5 13.5 17.5 17 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.5 17C15.5 18 17 20 17.5 20C19 20 20.333 18.333 21 17C21.667 15.333 21.5 11.167 19.5 5.5C18.043 4.485 16.5 4.16 15 4L14 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.50011 17C8.50011 18 7.14411 20 6.66811 20C5.23911 20 3.97011 18.333 3.33511 17C2.70011 15.333 2.85911 11.167 4.76311 5.5C6.15111 4.485 7.54511 4.16 9.00011 4L10.0001 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Discord
                    </a>
                </li>
            )}

        </ul>
    </TooltipContent>
);
