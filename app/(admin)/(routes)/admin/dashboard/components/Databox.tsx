import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowBigDown, ArrowBigUp, ArrowUp } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  qty: number;
  qtyPercentage: number;
  profit: boolean;
};

const Databox = ({ title, qty, qtyPercentage, profit }: Props) => {
  return (
    <Card className="w-full md:w-1/4 pt-4 rounded-lg bg-secondary shadow-md shadow-emerald-300">
      <CardTitle className="px-2 text-center text-xl mb-4 text-muted-foreground">
        {title}
      </CardTitle>
      <CardContent className="flex flex-wrap gap-2 items-center justify-center ">
        <h1 className="text-2xl font-bold">{qty}</h1>
        <div className="flex items-center text-muted-foreground ml-4 justify-center">
          {qtyPercentage}%{" "}
          {profit ? (
            <ArrowBigUp color="green" size={24} />
          ) : (
            <ArrowBigDown color="red" />
          )}
        </div>
      </CardContent>
      <CardFooter
        className="text-sm text-muted-foreground
      ">
        Since last month
      </CardFooter>
    </Card>
  );
};

export default Databox;
