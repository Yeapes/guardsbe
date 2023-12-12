import Image from "next/image";

const Service = ({ imageUrl, title, description }) => {
  return (
    <div
      className="bg-white border-2 border-gray-200 text-black p-6 lg:p-6 rounded-lg"
      data-aos="fade-right"
    >
      <Image
        className="mb-6"
        height={40}
        width={40}
        src={imageUrl}
        alt={title}
      />
      <h2 className="text-xl font-semibold lg:text-2xl mb-2 ">{title}</h2>
      <p className="leading-normal text-xl mb-6">{description}</p>
    </div>
  );
};

export default Service;
