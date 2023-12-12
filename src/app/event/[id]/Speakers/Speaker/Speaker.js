import Image from "next/image";
import React from "react";

const Speaker = ({ profile, name, designation }) => {
  return (
    <div className="relative rounded-full group">
      <Image
        className="w-full rounded-full"
        src={profile}
        width={200}
        height={200}
        alt={name}
      />
      <div className="absolute top-0 left-0 w-full hidden group-hover:flex flex-col items-center justify-center h-full bg-none group-hover:bg-blue-600 rounded-full">
        <h3 className="text-2xl font-bold font-sans">{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Speaker;
