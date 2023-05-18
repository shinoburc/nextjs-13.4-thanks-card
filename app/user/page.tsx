

import * as UserRepository from '@/app/_repositories/User';
import UserListComponent from "./user-list";

export default async function UserPage() {
  const users = await UserRepository.findMany();
  return (
    <>
      <UserListComponent users={users}/>
    </>
  );
};
