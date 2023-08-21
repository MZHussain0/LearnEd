import HeadingText from "@/components/HeadingText";
import { BugIcon, CrossIcon, FileWarning } from "lucide-react";
import React from "react";

type Props = {};

const PaymentFailPage = (props: Props) => {
  return (
    <div className="pt-32 flex flex-col items-center justify-center">
      <div className="block">
        <BugIcon size={100} strokeWidth={1} color="red" />
      </div>
      <div className="">
        <HeadingText title="PAYMENT FAILED! " description="Try Again." />
      </div>
    </div>
  );
};

export default PaymentFailPage;
