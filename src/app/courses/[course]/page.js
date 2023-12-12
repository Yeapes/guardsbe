import React from "react";
import CourseData from "./CourseData/CourseData";

const page = ({ params }) => {
  const courseId = params.course;
  return (
    <div className="">
      <CourseData courseId={courseId} />
    </div>
  );
};

export default page;
