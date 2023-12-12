"use client";
import React, { useEffect, useState } from "react";
import Course from "../[course]/Course";
import Link from "next/link";

const baseUrl = process.env.BASE_URL;

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token;
};
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = getTokenFromLocalStorage(); // Get the token from localStorage

    if (!token) {
      // Handle the case where the token is not available
      return;
    }

    fetch(`${baseUrl}/courses`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setCourses(data?.data?.[0].data);
      });
  }, []);

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-36">
      <h1 className="text-black text-center text-4xl font-semibold mb-6">
        All Courses
      </h1>
      <div className="courses">
        <div className="categories flex items-center justify-center flex-wrap gap-2 mb-6">
          {/* {courseCategories.map((categoryItem) => (
            <Link
              href={`courses/${categoryItem.toLocaleLowerCase()}`}
              className="category-item text-black font-semibold border border-gray-600 py-4 px-6 rounded-xl"
              key={categoryItem}
            >
              {categoryItem}
            </Link>
          ))} */}
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <Course
                key={course.title}
                title={course.title}
                category={course.category}
                instructor={course.instructor}
                duration={course.duration}
                image={course.image}
                courseId={course.id}
              />
            ))}
          </div>

          {/* <Course />
          <Course />
          <Course />
          <Course /> */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
