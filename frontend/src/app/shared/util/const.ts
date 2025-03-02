export const DEFAULT_LANG_CODE = 'en';
export const DEFAULT_LANG_NAME = 'English';

export const LANG = [
  { code: 'es', langName: 'Español' },
  { code: 'en', langName: 'English' },
];

export const SERVER_ROUTES = {
  auth: {
    singIn: 'auth/sign-in',
    singUp: 'auth/sign-up',
  },
};

export const CLIENT_ROUTES = {
  auth: {
    signIn: 'signIn',
    signUp: 'signUp',
  },
  home: 'home',
};

export const BASE_URL = 'http://localhost:8080/';
