import React, {
    FC, useEffect, useId, useRef, useState, useCallback, useMemo,
} from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';
import { formatNumber } from 'src/utils/number';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import styles from './index.module.scss';
import { ChartLinearTooltip } from './Tooltip';
import { ChartLinearData } from './types';

type MultiColor = {
    colorStart: string;
    colorStartAlpha: number;
    colorEnd: string;
    colorEndAlpha: number;
};

export interface ChartLinearProps<Data extends ChartLinearData = ChartLinearData> {
    data: Data[];
    tooltipText?: string;
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

export const ChartLinear: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    appearAnimationDuration = 1000,
    data,
    tooltipText,
    onActive,
    grid = { x: true, y: true },
    axis = { x: true, y: true },
    bg = {
        colorStart: '#00FFF4',
        colorStartAlpha: 1,
        colorEnd: '#00FFF4',
        colorEndAlpha: 0.1,
    },
    line = {
        colorStart: '#00FFF4',
        colorStartAlpha: 1,
        colorEnd: '#00FFF4',
        colorEndAlpha: 1,
    },
    dot = {
        r: 6,
        fill: '#00FFF4',
        stroke: '#fff',
        strokeWidth: 2,
    },
}) => {
    const id = useId();
    const parentRef = useRef<HTMLDivElement>(null);

    // global states
    const [isInteractive, setIsInteractive] = useState(false);
    const [isSmallVersion, setIsSmallVersion] = useState(true);
    const hasAxisY = axis ? axis.y && !isSmallVersion : false;

    // classnames
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
        hasAxisY ? styles.has_axis_y : '',
    ].join(' ');

    // get current data
    const getCurrentData = useCallback((reset: boolean, duration: number) => ({
        duration,
        data: reset ? data.map((item) => ({ ...item, value: 0 })) : [...data],
    }), [data]);

    // chart data
    // use zero values when animation needed
    const [currentData, setCurrentData] = useState(getCurrentData(appearAnimation || false, 0));

    // change data on animation launch
    const dataChanges = useRef(0);
    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;
        if (appearAnimation) {
            if (appearAnimationOn) {
                timeout = setTimeout(() => {
                    setCurrentData(getCurrentData(false, appearAnimationDuration));
                }, dataChanges.current > 0 ? 0 : 250);
                dataChanges.current += 1;
            } else {
                setCurrentData(getCurrentData(true, 0));
            }
        } else {
            setCurrentData(getCurrentData(false, dataChanges.current > 0 ? 500 : 0));
            dataChanges.current += 1;
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [appearAnimation, appearAnimationDuration, appearAnimationOn, data, getCurrentData]);

    // sizes
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    /**
     * Resize the scene
     */
    const resize = useCallback(() => {
        if (!parentRef.current) {
            return;
        }
        const { width: w, height: h } = parentRef.current.getBoundingClientRect();
        setWidth(w);
        setHeight(h);
        if (vevetApp.viewport.width < 600) {
            setIsSmallVersion(true);
        } else {
            setIsSmallVersion(false);
        }
    }, []);
    useOnResize(() => {
        resize();
    }, [resize]);
    useEffect(() => {
        if (appearAnimation && appearAnimationOn) {
            resize();
        }
    }, [appearAnimation, appearAnimationOn, resize]);

    /**
     * Background color
     */
    const bgSettingsMemo = useMemo(() => {
        if (!bg) {
            return {
                link: 'transparent',
                defs: null,
            };
        }
        return {
            link: `url('#${id}__gradient_bg')`,
            defs: (() => (
                <linearGradient
                    id={`${id}__gradient_bg`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2={height * 0.9}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor={bg.colorStart} stopOpacity={bg.colorStartAlpha} />
                    <stop offset="1" stopColor={bg.colorEnd} stopOpacity={bg.colorEndAlpha} />
                </linearGradient>
            ))(),
        };
    }, [bg, height, id]);

    /**
     * Line color
     */
    const lineSettingsMemo = useMemo(() => {
        if (!line) {
            return {
                link: 'transparent',
                defs: null,
            };
        }
        return {
            link: `url('#${id}__gradient_line')`,
            defs: (() => (
                <linearGradient
                    id={`${id}__gradient_line`}
                    x1="0"
                    y1="0"
                    x2={width}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor={line.colorStart} stopOpacity={line.colorStartAlpha} />
                    <stop offset="1" stopColor={line.colorEnd} stopOpacity={line.colorEndAlpha} />
                </linearGradient>
            ))(),
        };
    }, [line, id, width]);

    return (
        <div
            className={[
                styles.chart_linear,
                classNames,
            ].join(' ')}
            onMouseLeave={() => setTimeout(() => {
                if (onActive) {
                    onActive(null);
                }
            }, 100)}
            style={{
                pointerEvents: !isInteractive ? 'none' : 'auto',
            }}
        >
            <div
                ref={parentRef}
                className={[
                    styles.wrapper,
                    classNames,
                ].join(' ')}
            >
                <AreaChart
                    margin={{
                        top: 0, right: 0, left: 0, bottom: 0,
                    }}
                    width={width}
                    height={height}
                    data={currentData.data}
                >
                    {grid && (
                        <CartesianGrid
                            strokeDasharray="2 4"
                            vertical={grid.y}
                            horizontal={grid.x}
                            stroke="rgba(255, 255, 255, 0.1)"
                        />
                    )}
                    <defs>
                        {bgSettingsMemo.defs}
                        {lineSettingsMemo.defs}
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke={lineSettingsMemo.link}
                        strokeLinecap="round"
                        strokeWidth={3}
                        fill={bgSettingsMemo.link}
                        animationDuration={currentData.duration}
                        activeDot={{
                            r: dot.r,
                            style: {
                                fill: dot.fill,
                                stroke: dot.stroke,
                                strokeWidth: dot.strokeWidth,
                            },
                        }}
                        onAnimationStart={() => {
                            setIsInteractive(false);
                        }}
                        onAnimationEnd={() => {
                            setIsInteractive(true);
                        }}
                    />
                    <Tooltip
                        animationDuration={100}
                        cursor={false}
                        wrapperStyle={{
                            left: '-1px',
                            width: '2px',
                        }}
                        labelStyle={{
                            fill: '#f0f',
                        }}
                        offset={0}
                        content={(
                            <ChartLinearTooltip
                                tooltipText={tooltipText}
                                tooltipColor={dot.fill}
                                onActive={(dataItem) => {
                                    if (onActive) {
                                        onActive(dataItem);
                                    }
                                }}
                            />
                        )}
                    />
                    {axis && (
                        <>
                            {axis.x && (
                                <XAxis
                                    dataKey="label"
                                    axisLine
                                    tickLine={false}
                                    interval="preserveStartEnd"
                                    minTickGap={10}
                                    fontSize={14}
                                    fontWeight={500}
                                    stroke="var(--color-grey-600)"
                                    strokeWidth={1}
                                    dy={5}
                                />
                            )}
                            {hasAxisY && (
                                <YAxis
                                    axisLine
                                    tickLine={false}
                                    minTickGap={22}
                                    fontSize={14}
                                    fontWeight={500}
                                    stroke="var(--color-grey-600)"
                                    strokeWidth={1}
                                    tickFormatter={(val) => formatNumber(val)}
                                    tickCount={40}
                                    dx={-28}
                                />
                            )}
                        </>
                    )}
                </AreaChart>
            </div>
        </div>
    );
};
