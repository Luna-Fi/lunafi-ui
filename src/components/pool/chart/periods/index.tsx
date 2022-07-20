import React, { FC, useEffect, useState } from 'react';
import { BoxOutline } from 'src/components/box/outline';
import { ChartLinear, ChartLinearProps } from 'src/components/charts/linear';
import { ChartLinearData } from 'src/components/charts/linear/types';
import { NumberFormat } from 'src/components/number/format';
import { NavigationTablist, NavigationTablistItem } from '../../../navigation/tablist';
import styles from './styles.module.scss';

interface Period extends NavigationTablistItem {
    data: ChartLinearData[];
}

export interface PoolChartPeriodsProps {
    title?: string;
    value: number;
    periods: Period[];
}

export interface Props extends PoolChartPeriodsProps {
    chartProps?: Omit<ChartLinearProps, 'data'>;
}

export const PoolChartPeriods: FC<Props> = ({
    title,
    value,
    periods,
    chartProps,
}) => {
    const [tabKey, setTabKey] = useState(periods[0].key);
    const [period, setPeriod] = useState<Period | null>(null);

    useEffect(() => {
        if (tabKey) {
            setPeriod(periods.find(({ key }) => key === tabKey) || null);
        }
    }, [periods, tabKey]);

    return (
        <BoxOutline
            aria-label={title}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    {value && (
                        <div className={styles.value}>
                            <NumberFormat
                                value={value}
                                prefix="$"
                            />
                        </div>
                    )}
                    {periods && periods.length > 1 && (
                        <NavigationTablist
                            tablist={periods}
                            selectedKey={tabKey}
                            onSelect={setTabKey}
                        />
                    )}
                    {title && <div className={styles.title}>{title}</div>}
                </div>

                <div className={styles.chart}>
                    {period && (
                        <ChartLinear
                            data={period?.data}
                            grid={{ x: false, y: false }}
                            axis={{ x: false, y: false }}
                            {...chartProps}
                        />
                    )}
                </div>
            </div>
        </BoxOutline>
    );
};
