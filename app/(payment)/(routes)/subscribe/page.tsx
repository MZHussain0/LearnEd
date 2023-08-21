import HeadingText from "@/components/HeadingText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const SubscribePage = (props: Props) => {
  return (
    <>
      <div className="py-4">
        <HeadingText
          title="Subscribe"
          description="Subscribe to our platform for premium content"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Card className=" text-center">
          <CardHeader className="border-4 bg-secondary-foreground text-black">
            Pro Pack - 299/-
          </CardHeader>
          <CardContent>
            <p className="p-8">Join pro pack and get access to all content</p>
            <p>299/- only</p>
          </CardContent>
          <CardFooter>
            <Button size={"lg"} className="w-full font-semibold text-lg">
              Buy Now
            </Button>
          </CardFooter>

          <CardContent className="bg-gray-600 rounded-lg py-4">
            <p className="p-4 text-sm font-bold">100% REFUND AT CANCELLATION</p>
            <p className="text-xs text-muted-foregroundz">
              *Terms & Conditions Apply
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SubscribePage;
