import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { prisma } from '@/app/_utils/prismaSingleton';

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      role: true,
      department: true,
    },
  });
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  //const user: User = await request.json();
  //const createdUser = await prisma.user.create({ data: user });

  /*
    // スプレッド構文を使用しない場合。
    // (補足)プロパティ名と変数名が一致しているため、プロパティ名は省略できる。
    const { name, email, password, roleId, departmentId } = await request.json();
    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        roleId: roleId,
        departmentId: departmentId,
      },
    });
    */

  // スプレッド構文を使用する場合
  try {
    const body = await request.json();
    const createdUser = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json(createdUser);
    //res.status(200).json(createdUser);
  } catch (e) {
    //if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return NextResponse.next({ status: 500 });
    //res.status(500).end();
  }
}
