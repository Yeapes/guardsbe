import React from "react";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const Slide = ({ firstTitle, secondTitle, description, imageUrl }) => {
  return (
    <div className="relative max-w-full overflow-hidden">
      {/* <div className="shape-1 absolute hidden sm:block top-0 sm:-top-[150%] md:-top-[80%] lg:-top-[75%]  left-0 sm:-left-[50%] md:-left-[45%] lg:-left-[15%] w-2/5">
        <svg xmlns="http://www.w3.org/2000/svg" width="944px" height="894px">
          <defs>
            <linearGradient
              id="PSgrad_0"
              x1="88.295%"
              x2="0%"
              y1="0%"
              y2="46.947%"
            >
              <stop
                offset="0%"
                stopColor="rgb(67,186,255)"
                stopOpacity="1"
              ></stop>
              <stop
                offset="100%"
                stopColor="rgb(113,65,177)"
                stopOpacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          ></path>
          <path
            fill="url(#PSgrad_0)"
            d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          ></path>
        </svg>
      </div> */}

      {/* <div className="shape-2 hidden sm:block absolute -bottom-[65%] md:-bottom-[40%] lg:-bottom-[25%] -right-[20%] md:-right-[10%] lg:-right-[5%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="515px" height="515px">
          <defs>
            <linearGradient
              id="PSgrad_0"
              x1="0%"
              x2="89.879%"
              y1="0%"
              y2="43.837%"
            >
              <stop
                offset="0%"
                stopColor="rgb(67,186,255)"
                stopOpacity="1"
              ></stop>
              <stop
                offset="100%"
                stopColor="rgb(113,65,177)"
                stopOpacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
          ></path>
          <path
            fill="url(#PSgrad_0)"
            d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
          ></path>
        </svg>
      </div> */}

      <div
        className="p-6 h-full w-full min-h-[20vh] md:min-h-[30vh] lg:min-h-[60vh] xl:min-h[80vh] max-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${new URL(
            `${imageUrl !== undefined ? imageUrl : DEFAULT_IMAGE}`
          ).toString()})`,
        }}
      >
        <div
          className="py-12 sm:py-24 md:py-36 xl:px-48 px-6 sm:px-18 md:px-24 xl:px-48 w-full relative"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <p className="text-white w-full lg:w-3/5 uppercase text-xl pb-6">
            {firstTitle}
          </p>
          <h1 className="text-3xl w-full lg:w-3/5 md:text-5xl xl:text-7xl text-white font-semibold md:font-bold">
            {secondTitle}
          </h1>
          <p className="text-white w-full lg:w-3/5 text-sm sm:text-lg md:text-xl lg:text-xxl font-bold pt-6 leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
