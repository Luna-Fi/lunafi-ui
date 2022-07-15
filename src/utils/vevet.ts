import { Application } from 'vevet';

export const vevetApp = (() => {
    let app!: Application;
    if (typeof window !== 'undefined') {
        if (window.vevetApp) {
            app = window.vevetApp;
        } else {
            app = new Application({
                viewportResizeTimeout: 100,
                sayHi: false,
            });
        }
    }
    return app;
})();
