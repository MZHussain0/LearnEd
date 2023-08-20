import { currentUser } from "@clerk/nextjs";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = async ({ children }: Props) => {
  return (
    <main className="h-full bg-secondary overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
