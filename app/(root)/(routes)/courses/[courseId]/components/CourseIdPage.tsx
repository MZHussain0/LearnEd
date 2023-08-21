"use client";
import Link from "next/link";
import React, { useState } from "react";
import LecturesList from "./LecturesList";

type Props = {};
const lectures = [
  {
    _id: "vneiurhgv",
    title: "Intro to web development",
    description: "This is a description of the course",
    video: {
      url: "https://www.youtube.com/embed/PjYWpd7xkaM",
    },
  },
  {
    _id: "vneiurhgvdfs",
    title: "What is web development",
    description: "Web development is a process of creating a website",
    video: {
      url: "https://www.youtube.com/embed/PjYWpd7xkaM",
    },
  },
  {
    _id: "vneiurhgdfv",
    title: "What is https?",
    description: "Web development is a process of creating a website",
    video: {
      url: "https://www.youtube.com/embed/PjYWpd7xkaM",
    },
  },
];

const CourseIdPage = (props: Props) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  return (
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 p-4 ">
      <div className="col-span-1 md:col-span-2 ">
        <video
          className="w-[100%] border-4 border-black outline-none"
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={"/videos/video.mp4"}></video>

        <div className="mt-0 bg-primary-foreground">
          <h1 className="p-4 text-2xl font-bold">{`#${lectureNumber + 1}  ${
            lectures[lectureNumber].title
          }`}</h1>
          <h2 className="p-4 text-xl font-medium">
            Description:
            <p className="text-sm text-muted-foreground mt-1">{`${lectures[lectureNumber].description}`}</p>
          </h2>
        </div>
      </div>

      <div className="col-span-1 bg-primary-foreground ">
        <div className="text-2xl p-4 text-muted-foreground font-semibold">
          Lectures
        </div>
        {lectures.map((lecture, index) => (
          <Link
            href={""}
            onClick={() => setLectureNumber(index)}
            key={lecture._id}
            className="">
            <LecturesList lecture={lecture} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseIdPage;
