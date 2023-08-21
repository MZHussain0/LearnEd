import HeadingText from "@/components/HeadingText";
import PlaylistSection from "@/components/PlaylistSection";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
const user = {
  name: "M.Z. Hussain",
  email: "test@test.com",
  createdAt: String(new Date().toDateString()),
  role: "admin",
  subscription: {
    status: "active",
  },
  playlist: [
    {
      course: "React JS",
      poster: "/images/placeholder.jpeg",
    },
    {
      course: "React JS",
      poster: "/images/placeholder.jpeg",
    },
    {
      course: "React JS",
      poster: "/images/placeholder.jpeg",
    },
    {
      course: "React JS",
      poster: "/images/placeholder.jpeg",
    },
  ],
};
const ProfilePage = async (props: Props) => {
  const User = await currentUser();
  return (
    <div className="p-4 mx-auto max-w-3xl">
      <HeadingText title="Profile" description="Manage your profile" />

      <div className=" flex items-center justify-center py-8">
        <div className="">
          <Image
            src={User?.imageUrl || "/images/placeholder.jpeg"}
            width={160}
            height={160}
            className="rounded-full mb-2"
            alt="User Image"
          />
        </div>
        <div className="ml-8">
          <h1 className="text-xl font-bold text-muted-foreground">
            Name: <span className="text-primary ml-4">{user.name}</span>
          </h1>
          <h1 className="mt-4 text-xl font-bold text-muted-foreground">
            Email: <span className="text-primary ml-4">{user.email}</span>
          </h1>
          <h1 className="mt-4 text-xl font-bold text-muted-foreground">
            Created At:{" "}
            <span className="text-primary ml-4">{user.createdAt}</span>
          </h1>
          <div className="mt-4">
            {user.role === "admin" && (
              <Link href={"/subscribe"}>
                <Button
                  variant={
                    user.subscription.status === "active"
                      ? "destructive"
                      : "default"
                  }
                  className="text-center pt-2">
                  {user.subscription.status === "active"
                    ? "Cancel Subscription"
                    : "Subscribe"}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold text-muted-foreground my-4">
          Playlist
        </h1>
        {user.playlist.length > 0 && (
          <div className="overflow-x-auto flex items-center justify-center gap-2">
            {user.playlist.map((item, index) => (
              <PlaylistSection playlist={item} key={item.poster} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
