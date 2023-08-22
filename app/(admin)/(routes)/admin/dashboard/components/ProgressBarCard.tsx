import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import React from "react";

type Props = {
  value: number;
  title: string;
};

const ProgressBarCard = ({ title, value }: Props) => {
  return (
    <CardContent>
      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <div className="flex items-center justify-center text-primary">
          <p className="mr-2">0%</p>
          <Progress
            value={value}
            color="green"
            className="border-muted-foreground border-2"
          />
          <p className="ml-2">100%</p>
        </div>
      </div>
    </CardContent>
  );
};

export default ProgressBarCard;
