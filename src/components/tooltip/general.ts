// export type TooltipPos = 'top_left' | 'top_right';

import { media } from 'src/utils/media';
import { vevetApp } from 'src/utils/vevet';

export enum TooltipPosEnum {
    Left = 'left',
    Right = 'right',
    XCenter = 'x_center',

    TopLeft = 'top_left',
    TopRight = 'top_right',
    TopCenter = 'top_center',

    BottomLeft = 'bottom_left',
    BottomRight = 'bottom_right',
    BottomCenter = 'bottom_center',
}

type ExcludeEnum = TooltipPosEnum.Left | TooltipPosEnum.Right | TooltipPosEnum.XCenter;

export type TooltipPosStrictEnum = Exclude<TooltipPosEnum, ExcludeEnum>;

/**
 * Get tooltip strict position
 */
export const getTooltipNormalizedPos = (props: {
    position?: TooltipPosEnum,
    parent: HTMLElement,
}): TooltipPosStrictEnum => {
    // check if allowed position
    if (
        props.position
        && ![
            TooltipPosEnum.Left,
            TooltipPosEnum.Right,
            TooltipPosEnum.XCenter,
        ].includes(props.position)
    ) {
        return props.position as any;
    }

    const bounding = props.parent.getBoundingClientRect();
    const vWidth = vevetApp.viewport.width;
    const vHeight = vevetApp.viewport.height;
    const centerX = bounding.left + bounding.width / 2;
    const centerY = bounding.top + bounding.height / 2;

    const xPosition = centerX < vWidth / 2 ? 'left' : 'right';
    const yPosition = centerY < vHeight / 2 ? 'top' : 'bottom';

    // half-strict position
    if (props.position === TooltipPosEnum.Left) {
        if (yPosition === 'bottom') {
            return TooltipPosEnum.TopLeft;
        }
        return TooltipPosEnum.BottomLeft;
    }
    if (props.position === TooltipPosEnum.Right) {
        if (yPosition === 'bottom') {
            return TooltipPosEnum.TopRight;
        }
        return TooltipPosEnum.BottomRight;
    }
    if (props.position === TooltipPosEnum.XCenter) {
        if (yPosition === 'bottom') {
            return TooltipPosEnum.TopCenter;
        }
        return TooltipPosEnum.BottomCenter;
    }

    // auto position
    if (xPosition === 'left') {
        if (centerY < vHeight / 2) {
            return TooltipPosEnum.BottomLeft;
        }
        return TooltipPosEnum.TopLeft;
    }
    if (centerY < vHeight / 2) {
        return TooltipPosEnum.BottomRight;
    }
    return TooltipPosEnum.TopRight;
};

/**
 * Get tooltip styles
 */
export const getTooltipProgressStyles = (props: {
    progress: number,
    position: TooltipPosStrictEnum,
    parent: HTMLElement,
    tooltip: HTMLElement,
    margin: number,
    overflowMargin: 'auto' | number,
}) => {
    const {
        progress, position, parent, margin, tooltip,
    } = props;
    const bounding = parent.getBoundingClientRect();
    const tooltipBounding = tooltip.getBoundingClientRect();

    let overflowMargin = props.overflowMargin === 'auto' ? 0 : props.overflowMargin;
    if (props.overflowMargin === 'auto') {
        overflowMargin = media.isXS() ? 12 : 40;
    }

    const leftMaxWidth = vevetApp.viewport.width - bounding.left - overflowMargin;
    const rightMaxWidth = bounding.right - overflowMargin;
    const y = 40 * (1 - progress) + margin;
    const centerMaxWidth = Math.min(
        bounding.left + bounding.width / 2 - overflowMargin,
        vevetApp.viewport.width
            - (bounding.right - bounding.width / 2) - overflowMargin,
    ) * 2;

    const styles: Record<typeof position, () => {
        top: number | null;
        right: number | null;
        bottom: number | null;
        left: number | null;
        x: number;
        y: number;
        maxWidth: number | null;
    }> = {
        top_left: () => ({
            top: null,
            right: null,
            bottom: bounding.height,
            left: 0,
            x: 0,
            y: y * -1,
            maxWidth: leftMaxWidth,
        }),

        top_right: () => ({
            top: null,
            right: 0,
            bottom: bounding.height,
            left: null,
            x: 0,
            y: y * -1,
            maxWidth: rightMaxWidth,
        }),

        top_center: () => ({
            top: null,
            right: null,
            bottom: bounding.height,
            left: bounding.width / 2,
            x: tooltipBounding.width / -2,
            y: y * -1,
            maxWidth: centerMaxWidth,
        }),

        bottom_left: () => ({
            top: bounding.height,
            right: null,
            bottom: null,
            left: 0,
            x: 0,
            y,
            maxWidth: leftMaxWidth,
        }),

        bottom_right: () => ({
            top: bounding.height,
            right: 0,
            bottom: null,
            left: null,
            x: 0,
            y,
            maxWidth: rightMaxWidth,
        }),

        bottom_center: () => ({
            top: bounding.height,
            right: null,
            bottom: null,
            left: bounding.width / 2,
            x: tooltipBounding.width / -2,
            y,
            maxWidth: centerMaxWidth,
        }),
    };

    return {
        ...styles[position](),
        opacity: progress,
        visibility: progress > 0 ? 'visible' : 'hidden',
    };
};
