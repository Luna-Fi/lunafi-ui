import React, { FC, useEffect } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { NumberFormat } from 'src/components/number/format';
import styles from './Tooltip.module.scss';
import { ChartLinearData } from './types';

interface Props extends TooltipProps<ValueType, NameType> {
    tooltipText: string;
    tooltipColor: string;
    onActive: (data: any) => void;
}

export const ChartLinearTooltip: FC<Props> = ({
    active,
    payload,
    tooltipText,
    tooltipColor,
    onActive,
}) => {
    useEffect(() => {
        if (payload && payload[0] && payload[0].payload) {
            onActive(payload[0].payload);
        }
    }, [active, onActive, payload]);

    if (active && payload && payload[0] && payload[0].payload) {
        const data = payload[0].payload as ChartLinearData;

        return (
            <div className={styles.tooltip}>
                <span className={styles.key}>
                    {data.tooltipKey}
                </span>
                <span className={styles.info}>
                    <div
                        className={styles.info__color}
                        style={{
                            backgroundColor: tooltipColor,
                        }}
                    />
                    <span>
                        {tooltipText}
                        :
                        {' '}
                        <NumberFormat value={data.value} prefix="$" />
                    </span>
                </span>
            </div>
        );
    }
    return null;
};
