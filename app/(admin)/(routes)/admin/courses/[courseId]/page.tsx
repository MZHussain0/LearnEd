import HeadingText from "@/components/HeadingText";
import React from "react";
import CourseForm from "./components/CourseForm";

type Props = {};
const categories = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Artificial Intelligence" },
  { id: 3, name: "Machine Learning" },
  { id: 4, name: "Data Science" },
  { id: 5, name: "Game Development" },
  { id: 6, name: "DSA" },
];

const AdminCourseIdPage = (props: Props) => {
  return (
    <div className="">
      <CourseForm categories={categories} initialData={""} />
    </div>
  );
};

export default AdminCourseIdPage;
