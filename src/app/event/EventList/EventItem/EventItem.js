import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.BASE_URL;

const EventItem = ({
  eventImage,
  eventTitle,
  shortDesription,
  eventTime,
  eventPlace,
  eventId,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 border w-fit">
      <div className="w-full lg:w-2/5">
        <Image
          className="w-full"
          src={eventImage}
          height={550}
          width={750}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="w-full lg:w-3/5 p-6">
        <Link
          className="text-gray-700 text-5xl font-bold mb-4 block"
          href={`event/${eventId}`}
        >
          {eventTitle}
        </Link>
        <span className="text-gray-700 text-2xl">Time: {eventTime}</span> <br />
        <span className="text-gray-700 text-2xl">Location: {eventPlace}</span>
        <p className="text-black text-3xl mt-4">{shortDesription}</p>
      </div>
    </div>
  );
};

export default EventItem;
