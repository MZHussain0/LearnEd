import React from "react";

type Props = {
  lecture: {
    _id: string;
    title: string;
    description: string;
    video: {
      url: string;
    };
  };
};

const LecturesList = ({ lecture }: Props) => {
  return (
    <div className="px-4 py-3 border-b-2 ">
      <h1 className="hover:opacity-75 duration-200">{lecture.title}</h1>
    </div>
  );
};

export default LecturesList;
