import { FC } from 'react';
import { NumberFormatterOptions } from '../../../utils/number';
export interface NumberCounterProps extends NumberFormatterOptions {
    value: number;
    animation?: boolean;
    animationDuration?: number;
}
/**
 * Formatted and animated number
 */
export declare const NumberCounter: FC<NumberCounterProps>;
