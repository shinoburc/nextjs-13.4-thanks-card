
import { prisma } from '@/app/_utils/prismaSingleton';
import { User }  from '@prisma/client';

export async function findMany() {
    const users = await prisma.user.findMany({
        include: {
            role: true,
            department: true,
        },
    });
    return users;
}

export async function create(user: User) {
    const createdUser = await prisma.user.create({
      data: user,
    });
    return createdUser;
}