import React, { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<SVGSVGElement> { }

export const IconLunaFi = forwardRef<
SVGSVGElement,
Props
>((tagProps, ref) => (
    <svg
        ref={ref}
        {...tagProps}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="16" cy="16" r="16" fill="black" />
        <ellipse cx="12.8013" cy="15.9998" rx="7.68" ry="7.68" fill="#00FFFF" />
        <ellipse cx="19.3844" cy="15.9998" rx="7.68" ry="7.68" fill="#00FFFF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.0928 22.941C18.6875 21.7084 20.4813 19.0637 20.4813 16.0001C20.4813 12.9365 18.6875 10.2918 16.0928 9.0592C13.4982 10.2918 11.7043 12.9365 11.7043 16.0001C11.7043 19.0637 13.4982 21.7084 16.0928 22.941Z" fill="#141416" />
    </svg>
));
