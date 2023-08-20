"use client";
import React from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { ListVideoIcon, ViewIcon } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  data: {
    id: number;
    views: number;
    title: string;
    imageSrc: string;
    addToPlaylistHandler: boolean;
    creator: string;
    description: string;
    lectureCount: number;
  }[];
}

const Courses = ({ data }: Props) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <p className="text-sm text-muted-foreground">No companions found.</p>
      </div>
    );
  }

  const addToPlaylistHandler = (id: number) => {
    console.log("add to playlist");
  };
  return (
    <div className=" pt-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
      {data.map((item) => (
        <Card
          key={item.id}
          className="group bg-primary/10 rounded-xl cursor-pointer hover:-translate-y-2 transition duration-500 border-0">
          <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
            <div className="relative w-60 h-60 group-hover:scale-105 transition-all duration-500">
              <Image
                src={item.imageSrc}
                fill
                className="rounded-xl object-cover"
                alt="Character"
              />
            </div>
            <p className="font-bold text-xl pt-2 text-primary">{item.title}</p>
            <p className="text-xs">{item.description}</p>
          </CardHeader>
          <CardFooter className="flex flex-col text-base text-muted-foreground">
            <div className="text-primary">
              Creator: <span className="font-semibold">{item.creator}</span>
            </div>
            <div className="flex gap-4 items-center justify-between mt-2">
              <div className="flex items-center">
                <ViewIcon className="w-4 h-4 mr-1" />
                {item.views}
              </div>
              <div className="flex items-center">
                <ListVideoIcon className="w-4 h-4 mr-1" />
                {item.lectureCount}
              </div>
            </div>
          </CardFooter>
          <CardFooter className="flex justify-between ">
            <Link href={`/courses/${item.id}`}>
              <Button size={"sm"} variant="default">
                Watch Now
              </Button>
            </Link>
            <Button
              size={"sm"}
              variant="ghost"
              onClick={() => addToPlaylistHandler(item.id)}>
              Add to playlist
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
