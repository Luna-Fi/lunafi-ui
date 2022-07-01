import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const ButtonCopyToClipboard = forwardRef<
HTMLButtonElement,
Props
>(({
    text,
    children,
    className,
    ...tagProps
}, ref) => (
    <button
        ref={ref}
        type="button"
        {...tagProps}
        className={[
            styles.button_copy,
            className,
        ].join(' ')}
        onClick={() => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }}
    >
        {children}
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4.085V10.5C3.9999 11.1347 4.24123 11.7457 4.67504 12.209C5.10885 12.6724 5.70265 12.9534 6.336 12.995L6.5 13H10.914C10.8106 13.2924 10.6191 13.5456 10.3659 13.7247C10.1127 13.9038 9.81016 14 9.5 14H6C5.20435 14 4.44129 13.6839 3.87868 13.1213C3.31607 12.5587 3 11.7956 3 11V5.5C2.99984 5.18967 3.09593 4.88694 3.27503 4.63351C3.45413 4.38008 3.70742 4.18844 4 4.085ZM11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5V10.5C13 10.8978 12.842 11.2794 12.5607 11.5607C12.2794 11.842 11.8978 12 11.5 12H6.5C6.10218 12 5.72064 11.842 5.43934 11.5607C5.15804 11.2794 5 10.8978 5 10.5V3.5C5 3.10218 5.15804 2.72064 5.43934 2.43934C5.72064 2.15804 6.10218 2 6.5 2H11.5ZM11.5 3H6.5C6.36739 3 6.24022 3.05268 6.14645 3.14645C6.05268 3.24021 6 3.36739 6 3.5V10.5C6 10.6326 6.05268 10.7598 6.14645 10.8536C6.24022 10.9473 6.36739 11 6.5 11H11.5C11.6326 11 11.7598 10.9473 11.8536 10.8536C11.9473 10.7598 12 10.6326 12 10.5V3.5C12 3.36739 11.9473 3.24021 11.8536 3.14645C11.7598 3.05268 11.6326 3 11.5 3Z" fill="white" />
        </svg>
    </button>
));
