import HeadingText from "@/components/HeadingText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

type Props = {};

const PaymentSuccessPage = (props: Props) => {
  return (
    <>
      <div className="py-4">
        <HeadingText
          title="You have the Pro Pack now"
          description="You now have access to all premium content"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Card className=" text-center">
          <CardHeader className="border-4 bg-secondary-foreground text-black">
            Payment Success
          </CardHeader>
          <CardContent>
            <p className="py-8 flex items-center justify-center">
              <CheckCircle size={60} />
            </p>
          </CardContent>
          <CardFooter>
            <Button size={"lg"} className="w-full font-semibold text-lg">
              Go to profile
            </Button>
          </CardFooter>
          <div>
            <p className="block p-4 text-sm font-bold">
              Reference: vorwvnertwqop5ug85ovf687u
            </p>
          </div>{" "}
        </Card>
      </div>
    </>
  );
};

export default PaymentSuccessPage;
