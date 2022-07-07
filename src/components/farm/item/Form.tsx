import React, {
    forwardRef, ReactNode, useImperativeHandle, useRef, useState,
} from 'react';
import { FormInputNumber } from 'src/components/form/input-number';
import { NumberFormat } from 'src/components/number/format';
import styles from './Form.module.scss';

interface Props {
    label: string;
    balance: number;
    max: number;
    icon: string;
    renderButton: (value: number | undefined) => ReactNode;
}

export interface FarmItemFormHandle {
    getInputValue: () => (number | undefined);
}

export const FarmItemForm = forwardRef<
FarmItemFormHandle,
Props
>(({
    label,
    balance,
    max,
    icon,
    renderButton,
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({
        getInputValue: () => (
            (inputRef.current && inputRef.current.value.length > 0)
                ? parseFloat(inputRef.current.value || '0')
                : undefined
        ),
    }));

    return (
        <form>
            <div className={styles.head}>
                Balance:
                {' '}
                <NumberFormat value={balance} suffix={` ${label}`} />
            </div>
            <div className={styles.input}>
                <FormInputNumber
                    ref={inputRef}
                    label="Enter Amount"
                    icon={icon}
                    max={max}
                    onChange={(val) => {
                        setValue(`${val ?? ''}`);
                    }}
                    onMax={(val) => {
                        setValue(`${val ?? ''}`);
                    }}
                />
            </div>
            <div className={styles.buttons}>
                {renderButton(value.length > 0 ? parseFloat(value) : undefined)}
            </div>
        </form>
    );
});
