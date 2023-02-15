import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen px-[10%] bg-white text-black dark:bg-black dark:text-white">
      {children}
    </div>
  );
};
