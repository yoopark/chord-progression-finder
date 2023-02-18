import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-full overflow-y-auto px-[10%] bg-white text-black dark:bg-black dark:text-white duration-300 ease-in-out">
      {children}
    </div>
  );
};
