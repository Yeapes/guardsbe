import Image from "next/image";
import React from "react";

const FeatureItem = ({ icon, title, shortDesc }) => {
  return (
    <div className="p-6 group border shadow-md flex items-center gap-6 rounded-md hover:border-black">
      <Image
        className="rotate-0 group-hover:rotate-45 transition-all duration-300"
        src={icon}
        height={60}
        width={60}
        alt={title}
        style={{}}
      />
      <div>
        <h3 className="text-black text-2xl font-bold mb-4 font-sans">
          {title}
        </h3>
        <p className="text-gray-500 font-serif">{shortDesc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
