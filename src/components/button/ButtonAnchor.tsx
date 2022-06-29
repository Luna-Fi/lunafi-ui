import React, {
    AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef,
} from 'react';

export type ButtonAnchorProps = ({
    tag: 'a';
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>)
| ({
    tag: 'button';
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
} & ButtonHTMLAttributes<HTMLButtonElement>);

export const ButtonAnchor = forwardRef<
HTMLAnchorElement | HTMLButtonElement,
ButtonAnchorProps
>(({
    tag,
    children,
    ...tagProps
}, ref) => {
    if (tag === 'a') {
        return (
            <a
                ref={ref as any}
                {...tagProps as any}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            ref={ref as any}
            type="button"
            {...tagProps as any}
        >
            {children}
        </button>
    );
});
