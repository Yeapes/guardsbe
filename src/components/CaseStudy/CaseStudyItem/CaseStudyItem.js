import Image from "next/image";
import "./Casestudyitem.css";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const CaseStudyItem = ({ imageUrl, firstTitle, secondTitle, description }) => {
  return (
    <div
      className="relative case-study-slider-item mx-6 rounded-lg group"
      data-aos="fade-right"
    >
      {imageUrl && (
        <Image
          className="rounded-lg min-h-64 max-h-64 h-64 object-cover"
          src={imageUrl}
          height={500}
          width={800}
          alt={secondTitle}
        />
      )}
      {/* {imageUrl !== undefined ? (
        <Image
          className="rounded-lg min-h-64 max-h-64 h-64 object-cover"
          src={imageUrl}
          height={500}
          width={800}
          alt={firstTitle}
        />
      ) : (
        <Image
          className="rounded-lg"
          src={DEFAULT_IMAGE}
          height={500}
          width={800}
          alt={firstTitle}
        />
      )} */}

      <div className="absolute hidden group-hover:block left-6 bottom-6 slide-content">
        <h3 className="text-lg text-white">{firstTitle}</h3>
        <h1 className="text-2xl xl:text-3xl text-white font-semibold">
          {secondTitle}
        </h1>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyItem;
