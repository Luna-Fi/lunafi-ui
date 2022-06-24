import { FC } from 'react';
import { NumberFormatterOptions } from 'src/utils/number';
export interface NumberFormatProps extends NumberFormatterOptions {
    value: number;
}
/**
 * Formatted and animated number
 */
export declare const NumberFormat: FC<NumberFormatProps>;
