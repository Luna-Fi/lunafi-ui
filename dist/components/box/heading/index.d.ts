import { FC, PropsWithChildren, ReactNode } from 'react';
export interface Props {
    heading: string;
    nav?: ReactNode;
}
export declare const BoxHeading: FC<PropsWithChildren<Props>>;
