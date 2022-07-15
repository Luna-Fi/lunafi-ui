import { FC, HTMLAttributes } from 'react';
import { PreviewNetworkLabelProps } from '../network-label';
export interface PreviewCoinProps {
    img: string;
    name: string;
    value: number;
    network: PreviewNetworkLabelProps;
    earning?: {
        percent?: number;
        lfiPercent?: number;
    };
    onDepositClick?: () => void;
}
export interface Props extends PreviewCoinProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * @default 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * @default false
     */
    useOverlayHover?: boolean;
    style?: HTMLAttributes<HTMLDivElement>['style'];
    className?: HTMLAttributes<HTMLDivElement>['className'];
    disabled?: boolean;
    depositButtonText?: string;
}
export declare const PreviewCoin: FC<Props>;
