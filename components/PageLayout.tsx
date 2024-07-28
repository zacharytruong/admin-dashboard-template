import { ReactNode } from 'react';
import { appDrawerId } from '@/constants';
import { CiMenuBurger } from 'react-icons/ci';
import { currentUser } from '@clerk/nextjs/server';

export default async function PageLayout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const user = await currentUser();
  return (
    <main className="p-4">
      <div className="flex items-center justify-between pb-4 border-b-[0.01em]">
        <label
          htmlFor={appDrawerId}
          className="btn btn-primary drawer-button lg:hidden"
        >
          Menu <CiMenuBurger />
        </label>
        {/*Placeholder to position the menu nicely.*/}
        <div className="hidden lg:block"></div>
        <h1>{title}</h1>
        <p>
          Welcome,{' '}
          <span className="text-[gold]">{user?.username || 'customer!'}</span>!
        </p>
      </div>
      <div className="py-4">{children}</div>
    </main>
  );
}
