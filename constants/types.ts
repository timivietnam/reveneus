export enum EKeyAsyncStorage {
  THEME = 'THEME',
  JWT = 'JWT',
  USER = 'USER',
  EMAIL = 'EMAIL',
  INTRO = 'INTRO',
}

export enum EMode {
  ADD = 'ADD',
  EDIT = 'EDIT',
}

export enum EFormat {
  LIMIT = 'LIMIT',
  DEFAULT = 'DEFAULT',
  BASIC = 'BASIC',
}

export interface IOverView {
  title: string;
  value: string;
  secondTitle?: string;
  secondValue?: string;
  description?: string;
}
