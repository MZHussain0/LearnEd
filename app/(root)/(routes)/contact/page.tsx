import HeadingText from "@/components/HeadingText";
import React from "react";
import ContactUsForm from "@/components/ContactUsForm";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <div className="p-4">
        <HeadingText title="Contact Us" description="have any doubt?" />
      </div>

      <ContactUsForm />
      <div className="flex items-center justify-center">
        <p>
          Want to request for a course?{" "}
          <Link
            href={"/request"}
            className="text-green-500 hover:text-green-600">
            Click here!
          </Link>
        </p>
      </div>
    </>
  );
};

export default ContactPage;
