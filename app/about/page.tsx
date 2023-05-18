'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ComponentTest from './compoent-test';

export default function About() {
  const router = useRouter();

  return (
    <>
      <div>This is About Component.</div>
      <ComponentTest />
      <Link href='/'>Home</Link>
      <button type='button' onClick={() => router.push('/')}>
        Home(useRouter)
      </button>
    </>
  );
}
