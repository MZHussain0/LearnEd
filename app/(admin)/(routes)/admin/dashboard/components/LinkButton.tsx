"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  icon: LucideIcon;
  link: string;
}

const LinkButton = ({ link, label, icon: Icon }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Link
      href={`/admin/${link}`}
      className={cn(
        "bg-secondary flex items-center justify-center hover:text-primary gap-4 p-4 rounded-md  border border-b-primary/5 transition duration-300 ",
        pathname === `/admin/${link}`
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground"
      )}>
      <div className="">
        <Icon className="w-6 h-6 " />
      </div>

      <div className="text-lg">{label}</div>
    </Link>
  );
};

export default LinkButton;
