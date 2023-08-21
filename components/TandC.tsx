import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { termsAndCondtions } from "../lib/termsAndConditions";

type Props = {};

const TandC = (props: Props) => {
  return (
    <>
      <div className="font-semibold text-center">Terms and Conditons</div>
      <Card>
        <CardContent className=" py-2 h-[25rem] overflow-auto">
          {termsAndCondtions}
          <CardFooter className="font-semibold text-green-500">
            Refund only applicable for cancellation within 7 days
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
};

export default TandC;
