import Base64 from './Base64';

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(Base64.atob(base64));
};

export const isJwtTokenValid = (token: string) => {
  const _parseJwt = parseJwt(token);
  const jwtExpiryMillis = _parseJwt.exp;
  const currentTimeMillis = Math.floor(Date.now() / 1000);
  return jwtExpiryMillis > currentTimeMillis;
};
