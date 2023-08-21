"use client";
import HeadingText from "@/components/HeadingText";
import { AxeIcon } from "lucide-react";
import React from "react";

const Custom404 = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="block">
        <AxeIcon size={100} strokeWidth={1} color="red" />
      </div>
      <div className="">
        <HeadingText
          title="Sorry :( "
          description="The page you are looking for does not exist"
        />
      </div>
    </div>
  );
};

export default Custom404;
