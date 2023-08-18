import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
};

export default DashboardLayout;
