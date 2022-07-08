import { FC } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
interface Props extends TooltipProps<ValueType, NameType> {
    tooltipText: string;
    tooltipColor: string;
    onActive: (data: any) => void;
}
export declare const ChartLinearTooltip: FC<Props>;
export {};
