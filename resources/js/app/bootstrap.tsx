import '../../css/app.css';

import { appConfig } from '@/app/config';
import { env } from '@/app/lib';
import { initializeTheme } from '@/hooks/use-appearance';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    title: (title) => (title ? `${title} - ${env.appName}` : env.appName),
    resolve: (name) =>
        resolvePageComponent(
            `../Pages/${name}.tsx`,
            import.meta.glob('../Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: appConfig.progressColor,
    },
});

// This will set light / dark mode on load...
initializeTheme();
