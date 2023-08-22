import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import { DoughnutChat } from "./chart";

type Props = {};

const DoughnutGraph = (props: Props) => {
  return (
    <Card className="p-4">
      <CardTitle className="text-center">Subscribers</CardTitle>
      <CardContent className="text-center">
        <DoughnutChat />
      </CardContent>
    </Card>
  );
};

export default DoughnutGraph;
