
import { prisma } from '@/app/_utils/prismaSingleton';
import Link from 'next/link';

import ComponentTest from './compoent-test';
import { useState } from 'react';
import { User } from '@prisma/client';


export default async function About() {
  const users = await prisma.user.findMany({
    include: {
      role: true,
      department: true,
    },
  });

  return (
    <div>
      <div>This is About Component.</div>
      <ComponentTest />
      <Link href='/'>Home</Link>
      {users?.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        )
      })}

    </div>
  );
}
