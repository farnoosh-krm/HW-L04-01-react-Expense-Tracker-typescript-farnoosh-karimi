import React from "react";

const MiddleLayout = ({ children }) => {
  return (
    <div className="w-full  grid grid-cols-2 grid-rows-7 gap-4">{children}</div>
  );
};

export default MiddleLayout;
