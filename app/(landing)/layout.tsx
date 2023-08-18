import { currentUser } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
