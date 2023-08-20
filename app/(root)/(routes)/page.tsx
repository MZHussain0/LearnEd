import { LandingHero } from "@/components/LandingContent";
import LandingFooter from "@/components/LandingFooter";
import { LandingNavbar } from "@/components/LandingNavbar";
import React from "react";
import { currentUser } from "@clerk/nextjs";

type Props = {};

const LandingPage = (props: Props) => {
  const user = currentUser();

  return (
    <div className="h-full">
      <LandingHero />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
