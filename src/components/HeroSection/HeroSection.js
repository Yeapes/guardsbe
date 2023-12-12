import Link from "next/link";

const HeroSection = ({ backgroundImage, pageName, pageBreadcumb }) => {
  return (
    <div
      data-aos="fade-left"
      className="bg-cover px-12 py-48 bg-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${new URL(backgroundImage).toString()})`,
      }}
    >
      <div className="shape-1 absolute hidden sm:block top-0 sm:-top-[150%] md:-top-[145%] lg:-top-[124%]  left-0 sm:-left-[50%] md:-left-[20%] lg:-left-[12%] w-2/5">
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
      </div>

      <div className="shape-2 hidden -z-1 sm:block absolute -bottom-[65%] md:-bottom-[55%] -right-[0%] md:-right-[10%]">
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
      </div>
      <h1 className="text-white text-5xl text-center">{pageName}</h1>
      <p className="text-center text-white text-lg">
        <Link href="/">Home</Link> <span> / </span>
        <Link href="/about">{pageBreadcumb}</Link>
      </p>
    </div>
  );
};

export default HeroSection;
