import gsap from 'gsap';
import React, {
    FC, useEffect, useState,
} from 'react';
import { NumberFormatterOptions, toNumber } from '../../../utils/number';
import styles from './styles.module.scss';
import { NumberFormat } from '../format/index';

export interface NumberCounterProps extends NumberFormatterOptions {
    value: number;
    animation?: boolean;
    animationDuration?: number;
}

/**
 * Formatted and animated number
 */
export const NumberCounter: FC<NumberCounterProps> = ({
    value,
    animation,
    animationDuration = 1000,
    ...formatOptions
}) => {
    const [dynamicRef, setDynamicRef] = useState<HTMLSpanElement | null>(null);
    const [dynamicValue, setDynamicValue] = useState(0);

    const rightFixed = formatOptions.rightFixed ?? (`${value}`).split('.')[1]?.length;

    useEffect(() => {
        if (!animation || !dynamicRef) {
            setDynamicValue(0);
            return undefined;
        }
        const startValue = toNumber(dynamicRef.innerHTML);
        const endValue = value;

        const timeline = gsap.timeline({
            duration: animationDuration / 1000,
            onUpdate: () => {
                const progress = timeline.progress();
                const current = gsap.utils.interpolate(startValue, endValue, progress);
                setDynamicValue(current);
            },
        });
        return () => {
            timeline.kill();
        };
    }, [animation, animationDuration, dynamicRef, value]);

    return (
        <span className={styles.number_counter}>
            <span className={styles.static}>
                <NumberFormat
                    value={value}
                    {...formatOptions}
                    rightFixed={rightFixed}
                />
            </span>
            <span className={styles.dynamic} ref={setDynamicRef}>
                <NumberFormat
                    value={dynamicValue}
                    {...formatOptions}
                    rightFixed={rightFixed}
                />
            </span>
        </span>
    );
};
