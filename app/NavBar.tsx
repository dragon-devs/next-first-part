'use client'
import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const NavBar = () => {
  const {status, data: session} = useSession();


  return (
      <div className="flex p-4 bg-slate-700 space-x-4">
        <Link href="/" className="mr-5">Next.js</Link>
        <Link href="/users">Users</Link>
        <Link href="/admin">Admin</Link>
        {status === 'loading' && <div>loading...</div>}
        {status === 'authenticated' && <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">Sign Out</Link>
        </div>}
        {status === 'unauthenticated' && (
            <>
              <Link href="/api/auth/signin">Login</Link>
              <Link href="/register">Signup</Link>
            </>
        )}

      </div>
  );
};

export default NavBar;