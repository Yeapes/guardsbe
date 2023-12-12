"use client";
import Image from "next/image";
import React from "react";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const Details = ({ blogData }) => {
  const shareUrl = `https://visiwave.xyz/blogs/${blogData.id}`;
  const title = blogData.title;
  const date = new Date(blogData.created_at);
  const formattedDate = date.toLocaleString(); // Format according to user's locale
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row gap-12 justify-between">
      <div className="main-body w-full md:w-3/4">
        <div className="blog-featured-image">
          <Image
            className="rounded-lg"
            src={blogData?.image}
            height={650}
            width={1000}
            alt="blog title"
            placeholder="blur"
            blurDataURL={blogData?.image}
          />
        </div>

        <div className="authors-section"></div>
        <div className="p-6">
          <h2 className="font-semibold text-4xl text-black">
            {blogData?.title}
          </h2>
          <p className="text-black">{formattedDate}</p>
          <div className="social-share flex items-center gap-3 justify-start">
            <div>
              <p className="text-black">Share: </p>
            </div>
            <div>
              <FacebookShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <div>
              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>
            <div>
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <XIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div>
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            <div>
              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div
            className="text-black"
            dangerouslySetInnerHTML={{ __html: blogData?.description }}
          ></div>
        </div>
      </div>
      <div className="right-side w-full md:w-1/4 gap-4 flex flex-col">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Popular Posts
        </h3>
        <div className="flex gap-4 items-center justify-start">
          <Image
            className=""
            src="https://thepixelcurve.com/html/techwix/techwix/assets/images/blog/r-post1.jpg"
            height={70}
            width={70}
            alt="author"
          />
          <div>
            <h4 className="text-black text-sm font-semibold">
              How Wireless Technology is Changing Business
            </h4>
            <div className="flex items-center justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <p className="text-gray-700 text-xs">July 20, 2023</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <Image
            className=""
            src="https://thepixelcurve.com/html/techwix/techwix/assets/images/blog/r-post1.jpg"
            height={70}
            width={70}
            alt="author"
          />
          <div>
            <h4 className="text-black text-sm font-semibold">
              How Wireless Technology is Changing Business
            </h4>
            <div className="flex items-center justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <p className="text-gray-700 text-xs">July 20, 2023</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-start">
          <Image
            className=""
            src="https://thepixelcurve.com/html/techwix/techwix/assets/images/blog/r-post1.jpg"
            height={70}
            width={70}
            alt="author"
          />
          <div>
            <h4 className="text-black text-sm font-semibold">
              How Wireless Technology is Changing Business
            </h4>
            <div className="flex items-center justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <p className="text-gray-700 text-xs">July 20, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
