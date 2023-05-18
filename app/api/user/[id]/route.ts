import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Prisma, User } from '@prisma/client';
import { prisma } from '@/app/_utils/prismaSingleton';

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  // URL から [id](の具体的な値) を取得する
  // (例) URL が /api/user/cl7ts8yvu0045ssa2e2vcrezk の場合 id = cl7ts8yvu0045ssa2e2vcrezk
  const id = params.id;
  const targetUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (targetUser) {
    return NextResponse.json(targetUser);
  } else {
    return NextResponse.next({ status: 404 });
  }
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (e) {
    //if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return NextResponse.next({ status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const id = params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(deletedUser);
}
