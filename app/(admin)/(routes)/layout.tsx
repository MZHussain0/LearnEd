import React from "react";
import AdminSidebar from "./admin/dashboard/components/AdminSidebar";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-9">
      <div className="col-span-1 md:col-span-7">{children}</div>
      <div className="col-span-1 md:col-span-2 bg-secondary p-4">
        <AdminSidebar />
      </div>
    </div>
  );
};

export default AdminLayout;
