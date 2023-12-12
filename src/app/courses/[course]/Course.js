import Image from "next/image";
import Link from "next/link";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const Course = ({ title, category, courseId, instructor, duration, image }) => {
  return (
    <div className="course relative border rounded-md border-gray-400">
      {image !== undefined ? (
        <Image
          className="rounded-md w-full"
          height={250}
          width={400}
          alt=""
          src={image}
        />
      ) : (
        <Image
          className="rounded-md w-full"
          height={250}
          width={400}
          alt=""
          src={DEFAULT_IMAGE}
        />
      )}

      <div className="p-3">
        <h3 className="text-black text-2xl ">{title}</h3>
        <p className="text-black text-ellipsis">{category}</p>
        <p className="text-black">{instructor}</p>
        <p className="text-black">{duration}</p>

        <button className="bg-blue-600 py-3 px-5 mt-3 rounded-md">
          <Link
            href={`courses/${courseId}`}
            params="1"
            className="inline-block uppercase text-sm"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Course;
