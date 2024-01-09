import React, {Suspense} from 'react';
import UserTable from "@/app/users/UserTable";
import Link from "next/link";

// QueryString Parameters
interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {

  return (
      <div>
        <h1>Users</h1>
        <Link href="/users/new" className="btn btn-primary">New User</Link>
        <UserTable sortOrder={sortOrder}/>
      </div>
  );
};

export default UsersPage;