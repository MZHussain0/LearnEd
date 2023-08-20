import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutGridIcon } from "lucide-react";

type Props = {};

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Home",
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Explore Courses",
    href: "/courses",
    color: "text-violet-500",
  },
  {
    label: "Request a course",
    href: "/request",
    color: "text-pink-700",
  },
  {
    label: "Contact Us",
    href: "/contact",
    color: "text-orange-700",
  },
  {
    label: "About Us",
    href: "/about",
    color: "text-orange-700",
  },
];
const Sidebar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const user = {
    role: "admin",
  };

  const onNavigate = (url: string) => {
    // TODO: Check if pro
    return router.push(url);
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-primary bg-secondary">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            LearnEd
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? " bg-primary/20"
                  : "text-muted-foreground"
              )}>
              <div className="flex items-center flex-1">{route.label}</div>
            </div>
          ))}
        </div>
      </div>

      {user && user.role === "admin" && (
        <Link href={"/admin/dashboard"}>
          <div className="flex items-center justify-between text-primary bg-secondary">
            <Button
              className="w-full m-4 justify-between"
              variant="default"
              size="lg">
              {" "}
              <LayoutGridIcon className="h-4 w-4 stroke-red-800  mr-2" /> Admin
              Dashboard
            </Button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
