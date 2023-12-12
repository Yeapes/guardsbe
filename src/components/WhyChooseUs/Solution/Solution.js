import Image from "next/image";
import "./Solution.css";
const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const Solution = ({ imageUrl, title, description }) => {
  return (
    <div className="relative solution-item group" data-aos="fade-bottom">
      {imageUrl !== undefined ? (
        <Image src={imageUrl} height={900} width={700} alt={title} />
      ) : (
        <Image src={DEFAULT_IMAGE} height={900} width={700} alt={title} />
      )}
      <div className=" absolute bottom-6 left-6 right-6 ">
        <h4 className="border-l-4 border-blue-400 ps-3 text-2xl md:text-3xl text-white">
          {title}
        </h4>
        <p className="hidden text-justify group-hover:block text-white text-xl px-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Solution;
