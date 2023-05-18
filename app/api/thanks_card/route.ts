import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { prisma } from '@/app/_utils/prismaSingleton';
import { ThanksCard } from '@prisma/client';
import { isValidToken } from '@/app/_utils/isValidToken';

export async function GET(request: NextRequest) {
  if (!isValidToken(request)) NextResponse.next({ status: 401 });
  const thanks_cards = await prisma.thanksCard.findMany({
    include: {
      from: true,
      to: true,
    },
  });
  return NextResponse.json(thanks_cards);
}
