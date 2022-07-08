import { FC } from 'react';
import { ChartLinearData } from './types';
declare type MultiColor = {
    colorStart: string;
    colorStartAlpha: number;
    colorEnd: string;
    colorEndAlpha: number;
};
export interface ChartLinearProps<Data extends ChartLinearData = ChartLinearData> {
    data: Data[];
    tooltipText: string;
    onActive?: (data: ChartLinearData | null) => void;
    grid?: {
        x: boolean;
        y: boolean;
    };
    axis?: {
        x: boolean;
        y: boolean;
    };
    bg?: MultiColor | false;
    line?: MultiColor | false;
    dot?: {
        r: number;
        fill: string;
        stroke: string;
        strokeWidth: number;
    };
}
export interface Props extends ChartLinearProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    appearAnimationDuration?: number;
}
export declare const ChartLinear: FC<Props>;
export {};
