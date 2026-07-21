"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/assets/logo.png";
import { Avatar } from '@heroui/react';
import { authClient, signOut, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div>
      <div className="navbar shadow-sm bg-base-100 border-b border-base-300 relative z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow border border-base-300"
            >
              <li className='font-semibold'><Link href="/">Home</Link></li>
              <li className='font-semibold'><Link href="/gigs">Gigs</Link></li>
              {!isPending && session && <>
                <li className='font-semibold'><Link href="/add-gig">Add Gig</Link></li>
                <li className='font-semibold'><Link href="/my-gigs">My Gigs</Link></li>
                <li className='font-semibold'><Link href="/my-orders">My Orders</Link></li>
              </>}
              <li className='font-semibold'><Link href="/about">About</Link></li>
              <li className='font-semibold'><Link href="/help">Help</Link></li>
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-[70px] w-[220px] overflow-hidden flex items-center">
  <Image
    src={logo}
    alt="GigsVerse logo"
    className="h-[100px] w-auto object-cover object-center scale-125 -mt-2"
  />
</div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-semibold text-[16px]'><Link href="/">Home</Link></li>
            <li className='font-semibold text-[16px]'><Link href="/gigs">Gigs</Link></li>
            {!isPending && session && <>
              <li className='font-semibold text-[16px]'><Link href="/add-gig">Add Gig</Link></li>
              <li className='font-semibold text-[16px]'><Link href="/my-gigs">My Gigs</Link></li>
              <li className='font-semibold text-[16px]'><Link href="/my-orders">My Orders</Link></li>
            </>}
            <li className='font-semibold text-[16px]'><Link href="/about">About</Link></li>
            <li className='font-semibold'><Link href="/help">Help</Link></li>
          </ul>
        </div>

        <div className="navbar-end space-x-[15px]">
          {!isPending && !session ? (
            <div className='flex gap-[10px]'>
              <Link href="/login" className="btn bg-pink-400 hover:bg-pink-300 text-white border-none rounded-full">
                Login
              </Link>
              <Link href="/register" className="btn bg-pink-500 hover:bg-pink-300 text-white border-none rounded-full">
                Register
              </Link>
            </div>
          ) : (
            <div className='flex items-center justify-between gap-[15px]'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-full m-1">
                  <Avatar>
                    <Avatar.Image alt="profile image" src={session?.user?.image ?? undefined} referrerPolicy="no-referrer" />
                    <Avatar.Fallback className="bg-pink-400 text-black">{session?.user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <span className="font-medium hidden sm:inline">{session?.user?.name}</span>
                </div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-200 border border-base-300 rounded-box z-50 w-56 p-2 shadow-sm">

                  <li className="p-0">
                    <div className="flex flex-col items-start w-full px-3 py-2 gap-0">
                      <p className="font-semibold leading-tight">
                        Welcome Back!
                      </p>
                      <p className="text-base-content/60 text-[13px] leading-tight">
                        {session?.user?.email}
                      </p>
                    </div>
                  </li>

                  <li>
                    <Link href='/my-gigs'>My Gigs</Link>
                  </li>

                  <li>
                    <Link href='/my-orders'>My Orders</Link>
                  </li>

                  <li>
                    <button onClick={handleSignout} className='font-semibold w-full flex items-center gap-2 text-pink-400'>
                      <MdOutlineLogout /> LogOut
                    </button>
                  </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;