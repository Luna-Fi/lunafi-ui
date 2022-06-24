import React, { FC } from 'react';
import { formatNumber, NumberFormatterOptions } from 'src/utils/number';

export interface NumberFormatProps extends NumberFormatterOptions {
    value: number;
}

/**
 * Formatted and animated number
 */
export const NumberFormat: FC<NumberFormatProps> = ({
    value,
    ...options
}) => (
    <>
        {formatNumber(value, options)}
    </>
);
