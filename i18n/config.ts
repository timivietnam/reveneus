import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

//En
import common from './en/common.json';
import auth from './en/auth.json';
import drawer from './en/drawer.json';
import calendar from './en/calendar.json';
import home from './en/home.json';
import account from './en/account.json';

export const defaultNS = 'common';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      auth: typeof auth;
      drawer: typeof drawer;
      calendar: typeof calendar;
      home: typeof home;
      account: typeof account;
    };
  }
}

export const resources = {
  en: {
    common,
    drawer,
    calendar,
    home,
    auth,
    account,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  compatibilityJSON: 'v3',
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

i18n.on('languageChanged', (lng) => {
  dayjs.locale(lng);
});
