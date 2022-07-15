import React, { FC, PropsWithChildren } from 'react';
import { StoreData, StoreProps } from './types';
export declare const Context: React.Context<StoreData>;
export declare const Provider: FC<PropsWithChildren<{
    value: StoreProps;
}>>;
