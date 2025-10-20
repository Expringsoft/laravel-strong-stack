import { appConfig } from '@/app/config';

export const env = {
	appName: import.meta.env.VITE_APP_NAME || appConfig.appName,
} as const;