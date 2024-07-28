'use client';

import { ReactNode } from 'react';
import { appDrawerId, leftSideMenu } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  return (
    <div className="drawer lg:drawer-open">
      <input id={appDrawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor={appDrawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-pink-700 glass min-h-full w-72 p-4 gap-8 text-2xl">
          {/* Sidebar content here */}
          {leftSideMenu.map((item) => (
            <label
              htmlFor={appDrawerId}
              key={item.id}
              className={`flex justify-between p-4 drawer-button hover:bg-yellow-200 hover:rounded-md hover:text-black  hover:cursor-pointer ${item.isActive(path) && 'border-b-[0.1rem] bg-[gold] text-black rounded-md'}`}
              aria-label="left-side-menu"
              onClick={() => router.push(item.path)}
            >
              <span>{item.name}</span> {<item.icon />}
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
}
