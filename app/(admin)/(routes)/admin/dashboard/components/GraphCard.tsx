import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart } from "./chart";

type Props = {};

const GraphCard = (props: Props) => {
  return (
    <Card className="p-4">
      <CardTitle>Views Graph</CardTitle>
      <CardContent>
        <LineChart />
      </CardContent>
    </Card>
  );
};

export default GraphCard;
