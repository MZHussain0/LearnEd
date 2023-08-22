import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import HeadingText from "@/components/HeadingText";
import { Card, CardTitle } from "@/components/ui/card";
import Databox from "./components/Databox";
import GraphCard from "./components/GraphCard";
import ProgressBarCard from "./components/ProgressBarCard";
import DoughnutGraph from "./components/DoughnutGraph";

type Props = {};

const AdminDashboardPage = (props: Props) => {
  return (
    <>
      <div className="pt-8">
        <HeadingText title="Dashboard" description="Manage your courses" />
      </div>

      <Card className="p-4 text-center">{`Last change was on ${
        String(new Date()).split("G")[0]
      }`}</Card>

      <div className="m-8 flex items-center justify-evenly flex-wrap gap-4">
        <Databox title="Views" qty={123} qtyPercentage={30} profit={true} />
        <Databox title="Users" qty={12} qtyPercentage={17} profit={true} />
        <Databox
          title="Subscription"
          qty={5}
          qtyPercentage={20}
          profit={false}
        />
      </div>

      <div className="mt-4 m-8">
        <GraphCard />
      </div>

      <div className="mt-4 m-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-1 md:col-span-2 p-4 bg-secondary shadow-md shadow-emerald-300">
          <CardTitle>Progress Bar</CardTitle>
          <ProgressBarCard title="Views" value={-20} />
          <ProgressBarCard title="Users" value={200} />
          <ProgressBarCard title="Subscription" value={25} />
        </Card>

        <div className="">
          <DoughnutGraph />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
