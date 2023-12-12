import Image from "next/image";
import Link from "next/link";
import React from "react";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const Blog = ({ imageUrl, authorName, blogTitle, blogUrl, time }) => {
  return (
    <div className="relative" data-aos="fade-left">
      <div className="w-full -h-full overflow-hidden ">
        {imageUrl !== undefined ? (
          <Image
            className="rounded-lg hover:scale-125 transition-transform w-full h-full"
            src={imageUrl}
            height={700}
            width={700}
            alt={blogTitle}
          />
        ) : (
          <Image
            className="rounded-lg hover:scale-125 transition-transform w-full h-full"
            src={DEFAULT_IMAGE}
            height={700}
            width={700}
            alt={blogTitle}
          />
        )}
      </div>
      <div className="absolute border-spacing-3 p-3 rounded-md shadow-xl border-spacing-1 border border-gray-400 w-9/10 bg-white -bottom-24 left-4 md:left-6 right-8">
        <div className="flex items-center justify-between gap-2 ">
          <span className="flex items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="darkblue"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="lightblue"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <h4 className="text-sm whitespace-nowrap text-blue-400 font-semibold ">
              {authorName}
            </h4>
          </span>
        </div>
        <h2
          className="py-2 text-lg font-sans font-semibold text-black"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {blogTitle}
        </h2>
        <Link
          className="flex items-center font-sans gap-2 text-blue-500 font-semibold"
          href={blogUrl}
        >
          Read Full
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
