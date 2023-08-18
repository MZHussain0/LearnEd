import { UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import MainNav from "./MainNav";
import { currentUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Navbar = async (props: Props) => {
  const user = await currentUser();
  console.log(user);
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {!user ? (
            <Link href={"/sign-up"}>
              <Button>Log In</Button>
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
