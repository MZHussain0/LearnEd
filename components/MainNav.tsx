﻿"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";

type Props = {
  className: string;
};

const MainNav = ({ className }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button type="submit" variant="ghost" size="icon" className="">
          <Menu strokeWidth={2} size={30} />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="p-0 bg-secondary pt-10 w-60">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MainNav;
