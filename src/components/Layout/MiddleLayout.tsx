import React, { ReactNode } from "react";

interface MiddleLayoutProps {
  children: ReactNode;
}

const MiddleLayout: React.FC<MiddleLayoutProps> = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-7 gap-4">{children}</div>
  );
};

export default MiddleLayout;
