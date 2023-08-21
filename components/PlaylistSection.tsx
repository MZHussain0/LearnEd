import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

type Props = {
  playlist: {
    course: string;
    poster: string;
  };
};

const PlaylistSection = ({ playlist }: Props) => {
  return (
    <Card className="w-48 rounded-xl">
      <CardHeader>
        <div className="text-center">{playlist.course}</div>
        <Image
          src={playlist.poster}
          width={160}
          height={160}
          alt="Course"
          className="rounded-xl"
        />
      </CardHeader>

      <CardFooter className=" w-full flex flex-col gap-2 items-center justify-center">
        <Button>Watch Now</Button>
        <Button variant={"destructive"}>
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaylistSection;
