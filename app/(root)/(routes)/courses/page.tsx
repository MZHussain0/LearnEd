import Categories from "@/components/Categories";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeadingText from "@/components/HeadingText";
import SearchInput from "@/components/SearchInput";
import React from "react";

type Props = {};
const categories = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Artificial Intelligence" },
  { id: 3, name: "Machine Learning" },
  { id: 4, name: "Data Science" },
  { id: 5, name: "Game Development" },
  { id: 6, name: "DSA" },
];
const courses = [
  {
    id: 1564,
    views: 10054,
    title: "Web Development",
    imageSrc:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    addToPlaylistHandler: true,
    creator: "John Doe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, harum!",
    lectureCount: 7,
  },
  {
    id: 264,
    views: 1654,
    title: "Game Development",
    imageSrc:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    addToPlaylistHandler: true,
    creator: "John Doe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, harum!",
    lectureCount: 5,
  },
  {
    id: 394,
    views: 156 + 4,
    title: "DSA",
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    addToPlaylistHandler: true,
    creator: "John Doe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, harum!",
    lectureCount: 3,
  },
];
const CoursesPage = (props: Props) => {
  return (
    <div className=" p-4">
      <HeadingText
        title="All Courses"
        description="Explore the best content available"
      />
      <SearchInput />
      <Categories categories={categories} />
      <Courses data={courses} />
    </div>
  );
};

export default CoursesPage;
