"use client";
import React from "react";
import LinkButton from "./LinkButton";
import {
  EyeIcon,
  LayoutDashboardIcon,
  PlusIcon,
  StampIcon,
  UserIcon,
} from "lucide-react";

type Props = {};

const AdminSidebar = (props: Props) => {
  return (
    <div className="flex flex-col">
      <LinkButton
        label="Dashboard"
        icon={LayoutDashboardIcon}
        link="dashboard"
      />
      <LinkButton label="Courses" icon={EyeIcon} link="courses" />
      <LinkButton label="Users" icon={UserIcon} link="users" />
    </div>
  );
};

export default AdminSidebar;
