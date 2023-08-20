"use client";

import { FC } from "react";
// import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { cn } from "@/lib/utils";

interface CategoriesProps {
  categories: {
    id: number;
    name: string;
  }[];
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = {
      categoryId: id,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="pt-4 w-full overflow-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          "flex items-center text-center text-sm md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
          !categoryId ? "bg-primary/25" : "bg-primary/10"
        )}>
        Newest
      </button>

      {categories.map((item: { id: number; name: string }) => (
        <button
          key={item.id}
          onClick={() => onClick(item.name)}
          className={cn(
            "flex items-center text-center text-sm md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
            item.name === categoryId ? "bg-primary/25" : "bg-primary/10"
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
