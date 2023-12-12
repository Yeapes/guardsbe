import Image from "next/image";
import React from "react";
import "./Leader.css";
import Link from "next/link";

const Leader = ({
  imageUrl,
  name,
  designation,
  fb,
  twitter,
  behance,
  linkedin,
}) => {
  return (
    <div className="relative leader-item">
      <Image
        className="grayscale-100 hover:grayscale-0 object-top"
        src={imageUrl}
        height={700}
        width={550}
        alt={name}
      />
      <div className="details absolute bottom-10 z-1">
        <div className="leader-details ps-8 relative z-10">
          <h2
            style={{}}
            className="text-lg xl:text-2xl text-white font-semibold name"
          >
            {name}
          </h2>
          <p className="text-white text-sm">{designation}</p>
          <div className="hover:flex items-center gap-3 leader-social hidden">
            <Link href={`https://facebook.com/${fb}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="facebook"
                fill="white"
                className="w-4 h-4 inline-block"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link href={`https://twitter.com/${twitter}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="twitter"
                fill="white"
                className="w-4 h-4"
              >
                <path
                  fill="white"
                  d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                ></path>
              </svg>
            </Link>
            <Link href={`https://linkedin.com/in/${linkedin}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="linkedin"
                className="w-4 h-4"
                fill="white"
              >
                <g fill="white">
                  <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path>
                  <circle cx="1.75" cy="1.75" r="1.75"></circle>
                </g>
              </svg>
            </Link>
            <Link href={`https://behance.com/${behance}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="behance"
                fill="white"
                className="w-4 h-4"
              >
                <path d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
