import numberFormatter from 'format-number';

export interface NumberFormatterOptions {
    prefix?: string;
    suffix?: string;
    leftFixed?: number;
    rightFixed?: number;
    hasSignPrefix?: boolean;
}

export function toNumber(
    val: number | string,
) {
    let str = `${val}`;
    str = str.replace(',', '.');
    str = str.replace(/[^\d,.-]/g, '');
    const float = parseFloat(str);
    return Number.isNaN(float) ? 0 : float;
}

export function formatNumber(
    val: number | string,
    options?: NumberFormatterOptions,
) {
    const num = toNumber(val);
    const str = num.toString();

    const leftFixed = options?.leftFixed ?? undefined;
    let rightFixed = 0;
    if (typeof options?.rightFixed !== 'undefined') {
        rightFixed = options.rightFixed;
    } else {
        rightFixed = str.split('.')[1]?.length ? 2 : 0;
    }

    const output = numberFormatter({
        padLeft: leftFixed,
        padRight: rightFixed,
        round: rightFixed,
        prefix: options?.prefix ?? '',
        suffix: options?.suffix ?? '',
    })(Math.abs(num));

    if (options?.hasSignPrefix || num < 0) {
        return `${num < 0 ? '-' : '+'}${output}`;
    }

    return `${output}`;
}
