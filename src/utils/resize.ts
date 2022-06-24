import { DependencyList, EffectCallback, useEffect } from 'react';
import { vevetApp } from './vevet';

export function useOnResize(
    effect: EffectCallback,
    deps?: DependencyList,
) {
    useEffect(() => {
        let destructor = effect();
        const viewportCallback = vevetApp.viewport.add(vevetApp.isMobile ? 'w' : '', () => {
            if (destructor) {
                destructor();
            }
            destructor = effect();
        });
        return () => {
            viewportCallback.remove();
            if (destructor) {
                destructor();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
