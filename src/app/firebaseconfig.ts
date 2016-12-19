import { ENV_APIKEY, ENV_AUTHDOMAIN, ENV_DATABASEURL, ENV_STORAGEBUCKET } from './env';

export const firebaseConfig = {
  apiKey: ENV_APIKEY,
  authDomain: ENV_AUTHDOMAIN,
  databaseURL: ENV_DATABASEURL,
  storageBucket: ENV_STORAGEBUCKET
};