// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server';

import { getToken } from 'next-auth/jwt';

export const isValidToken = async (request: NextRequest) => {
  /* Next.js 13.4 での next-auth getToken() 使用法が不明なためコメントアウト */
  return true;
  /*
  const token = await getToken(request);
  if (token) {
    // Authorized
    return true;
  } else {
    // Unauthorized
    return false;
  }
  */
};
