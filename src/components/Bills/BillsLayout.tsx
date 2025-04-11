import React, { ReactNode, FC } from "react";

interface BillsLayoutProps {
  children: ReactNode;
}

const BillsLayout: FC<BillsLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BillsLayout;
