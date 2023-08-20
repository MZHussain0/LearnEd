"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <div className="text-primary font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>Learn from the experts.</h1>
          <div className="pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></div>
        </div>
        <div className="text-sm md:text-xl font-light text-muted-foreground">
          Find the valuable courses at a reasonable price
        </div>
        <div>
          <Link href={isSignedIn ? "/courses" : "/sign-up"}>
            <Button
              variant="default"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Start Learning!
            </Button>
          </Link>
        </div>
        <div className="text-muted-foreground text-xs md:text-sm font-normal">
          No credit card required.
        </div>
      </div>

      <div className="flex items-center justify-center">
        <video
          className="w-[60%] border-4 border-black outline-none shadow-lg shadow-white"
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={"/videos/video.mp4"}></video>
      </div>
    </>
  );
};
