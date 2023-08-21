import HeadingText from "@/components/HeadingText";
import RequestForm from "@/components/RequestForm";
import Link from "next/link";
import React from "react";

const RequestPage = () => {
  return (
    <>
      <div className="p-4">
        <HeadingText
          title="Request for a course"
          description="Tell us more about about the course you want and why"
        />
      </div>

      <RequestForm />

      <div className="flex items-center justify-center">
        <p>
          See all the courses available?{" "}
          <Link
            href={"/courses"}
            className="text-green-500 hover:text-green-600">
            Click here!
          </Link>
        </p>
      </div>
    </>
  );
};

export default RequestPage;
