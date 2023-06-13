"use client";
import React, { useState } from 'react';
import { useStore } from '../../store';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export const RightMain = () => {
  const [toggle, setToggle] = useState(false);
  const drawer = useStore((state) => state.drawer);
  const setDrawer = useStore((state) => state.setDrawer);
  const showDrawer = () => {
    setDrawer(true);
  };
  return (
    <div className="flex w-full min-h-screen bg-black-50 justify-center items-center">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-6 p-6 justify-center">
          <Link href="/camera" className="w-1/2" >
            <button className="w-full px-10 py-2 font-semibold bg-cyan-500 text-white shadow-sm">
              <div className='flex gap-2 items-center justify-center'><SunIcon width="50" />
                <div className='text-3xl'>出勤</div>
              </div>
            </button>
          </Link >
          <Link href="/camera" className="w-1/2">
            <button className="w-full px-10 py-2 font-semibold text-lg bg-cyan-500 text-white shadow-sm">
              <div className='flex gap-2 items-center justify-center'><MoonIcon width="50" />
                <div className='text-3xl'>退勤</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
