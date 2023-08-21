import HeadingText from "@/components/HeadingText";
import TandC from "@/components/TandC";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StampIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="p-4 mx-auto max-w-3xl">
      <HeadingText
        title="About Us"
        description="few things regarding this platform"
      />

      <div className=" flex items-start justify-start">
        <div className="p-4">
          <Image
            src={"/images/placeholder.jpeg"}
            width={200}
            height={200}
            className="rounded-full"
            alt="Founder Image"
          />
          <p className="text-center text-muted-foreground pt-2">Co-founder</p>
        </div>
        <div className="pt-8 ml-8">
          <h1 className="text-3xl font-bold">M.Z. Hussain </h1>
          <p className="text-muted-foreground pt-2">
            Hi, I&apos;m a full-stack developer and teacher. Our mission is to
            provide quality coding content at a reasonable price
          </p>
        </div>
      </div>

      <div className=" pt-8  gap-4 flex justify-between items-center">
        <h2 className="font-semibold italic">
          We are a video streaming platform with some premium courses available
          only for premium users
        </h2>

        <Link href={"/subscription"}>
          <Button className="py-8">Premium Plans</Button>
        </Link>
      </div>

      <div className="pt-8">
        <TandC />
      </div>

      <div className="pt-2 flex">
        <StampIcon className="w-8 h-8 mr-4" />
        <p className="text-lg font font-semibold text-blue-600">
          Payement is secured by Razorpay
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
