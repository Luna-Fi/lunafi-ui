export interface NumberFormatterOptions {
    prefix?: string;
    suffix?: string;
    leftFixed?: number;
    rightFixed?: number;
    hasSignPrefix?: boolean;
}
export declare function toNumber(val: number | string): number;
export declare function formatNumber(val: number | string, options?: NumberFormatterOptions): string;
