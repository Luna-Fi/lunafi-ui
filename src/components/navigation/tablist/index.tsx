import React, {
    FC, HTMLAttributes, useEffect, useState,
} from 'react';
import defaultStyles from './styles.module.scss';

export interface NavigationTablistItem {
    key: string | number;
    tabpanelId?: string;
    name: string;
}

export interface NavigationTablistProps {
    tablist: NavigationTablistItem[];
    onSelect?: (key: string | number) => void;
}

export interface Props extends NavigationTablistProps, Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
    styles?: any;
    selectedKey?: string | number;
}

export const NavigationTablist: FC<Props> = ({
    styles: customStyles,
    tablist,
    onSelect,
    selectedKey,
    className,
    ...tagProps
}) => {
    const styles = customStyles || defaultStyles;

    const [selected, setSelected] = useState(selectedKey ?? tablist[0]?.key ?? undefined);
    useEffect(() => {
        if (typeof selectedKey !== 'undefined') {
            setSelected(selectedKey);
        }
    }, [selectedKey]);

    return (
        <div
            {...tagProps}
            className={[
                styles.tablist,
                className,
            ].join(' ')}
            role="tablist"
        >
            {tablist.map(({ key, tabpanelId, name }) => (
                <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={selected === key}
                    aria-controls={tabpanelId || undefined}
                    className={[
                        styles.tab,
                        selected === key ? styles.selected : '',
                    ].join(' ')}
                    onClick={() => {
                        if (selected !== key) {
                            if (typeof selectedKey === 'undefined') {
                                setSelected(key);
                            }
                            onSelect?.(key);
                        }
                    }}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};
