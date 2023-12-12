"use client";
import Image from "next/image";
import { useState } from "react";
import "./Whoweare.css";
import ReactPlayer from "react-player";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const WhoWeAre = ({ who_we_are }) => {
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideoClick = () => {
    setOpenVideo(true);
  };
  const closeVideo = () => {
    setOpenVideo(false);
  };

  return (
    <div className="flex-col flex lg:flex-row items-center justify-between p-8 md:p-20">
      <div className="left-side w-full lg:w-1/2 ">
        <h5 className="text-xxl uppercase tracking-wider font-semibold text-blue-600">
          Who we are
        </h5>
        <h1
          className="text-4xl text-black md:text-6xl font-semibold tracking-wider leading-tight mt-6"
          data-aos="fade-up"
        >
          {who_we_are?.title}
        </h1>
        <p
          className="mt-6 text-lg tracking-wide text-gray-500"
          data-aos="fade-up"
        >
          {who_we_are?.short_description}
        </p>
        <hr className="my-6" />
        <div
          className="flex items-center justify-start "
          data-aos="fade-up-right"
        >
          <div className="max-w-[34%] border-r pr-6">
            {who_we_are?.signature !== undefined ? (
              <Image
                src={who_we_are?.signature}
                height={30}
                width={200}
                alt=""
              />
            ) : (
              <Image src={DEFAULT_IMAGE} height={30} width={200} alt="" />
            )}

            <h4 className="font-semibold text-2xl text-black">
              {who_we_are.name}
            </h4>
            <p className="text-gray-500 ">{who_we_are.designation}</p>
          </div>
          <div className="max-w-[66%] ps-12">
            <p className="text-lg font-medium text-gray-400">
              Call to ask any questions.
            </p>
            <h1 className="text-3xl font-semibold text-blue-600">
              {who_we_are?.number}
            </h1>
          </div>
        </div>
      </div>
      <div className="right-side w-full lg:w-1/2 relative mt-12 lg:mt-0">
        <div className="wrapper z-10">
          <div className="video-main">
            <div className="promo-video">
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>
            <button
              className="video video-popup bg-gradient-to-r from-cyan-500 to-blue-500"
              onClick={handleVideoClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="">
          {openVideo && (
            <div className="fixed top-[10%] left-[10%] w-4/5 h-[310px] sm:h-[410px] md:h-[510px] lg:h-[720px] max-w-[100%] my-0 mx-auto z-50 rounded-lg border-gray-400 shadow-2xl border-8">
              <button
                className="absolute top-0 right-0 bg-white p-3 rounded-full text-black"
                onClick={closeVideo}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                url={who_we_are?.youtube_video_link}
              />
            </div>
          )}
        </div>

        {who_we_are?.photo_left !== undefined ? (
          <Image
            className="absolute bottom-8 md:bottom-24 left-0 hidden md:block max-w-[70%] rounded-lg border-8 border-white"
            src={who_we_are?.photo_left}
            height={300}
            width={500}
            alt=""
          />
        ) : (
          <Image
            className="absolute bottom-8 md:bottom-24 left-0 hidden md:block max-w-[70%] rounded-lg border-8 border-white"
            src={DEFAULT_IMAGE}
            height={300}
            width={500}
            alt=""
          />
        )}

        {who_we_are?.photo_side !== undefined ? (
          <Image
            className="rounded-lg object-cover ml-auto block max-w-full md:max-w-[70%] opacity-75 md:opacity-100"
            src={who_we_are?.photo_side}
            height={750}
            width={500}
            alt=""
            placeholder="blur"
            blurDataURL={who_we_are.photo_side}
          />
        ) : (
          <Image
            className="rounded-lg object-cover ml-auto block max-w-full md:max-w-[70%] opacity-75 md:opacity-100"
            src={DEFAULT_IMAGE}
            height={750}
            width={500}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
