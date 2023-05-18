'use client';

// next-auth が提供する signOut 関数を import する。
import { signOut } from 'next-auth/react';
// material-ui が提供する Button を import する。
import Button from '@mui/material/Button';

// Button を配置し onClick イベント(ボタンをクリックしたとき)に signOut 関数を実行するようにする。

export default function SignOutButton() {
  return (
    <Button onClick={() => signOut()} variant='contained' color='secondary'>
      Sign out
    </Button>
  );
}
