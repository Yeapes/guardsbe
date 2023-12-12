import Image from "next/image";

const ContactInfo = ({ settingsData }) => {
  return (
    <div className="py-12 lg:py-24 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-row flex-wrap justify-center gap-6">
      <div
        className="px-16 py-12 w-full sm:w-1/2 md:w-auto bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4"
        data-aos="fade-right"
      >
        <Image
          src="https://thepixelcurve.com/html/techwix/techwix/assets/images/info-1.png"
          height={50}
          width={50}
          alt="Contact"
        />
        <h4 className="text-black text-2xl font-semibold">Give us a call</h4>
        <p className="text-gray-600">{settingsData?.phone_number_1}</p>
        <p className="text-gray-600">{settingsData?.phone_number_2}</p>
      </div>
      <div
        className="px-16 py-12 w-full sm:w-1/2 md:w-auto bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4"
        data-aos="fade-right"
      >
        <Image
          src="https://thepixelcurve.com/html/techwix/techwix/assets/images/info-2.png"
          height={50}
          width={50}
          alt="Mail"
        />
        <h4 className="text-black text-2xl font-semibold">Drop us a line</h4>
        <p className="text-gray-600">{settingsData?.email}</p>
      </div>
      <div
        className="px-16 py-12 w-full sm:w-1/2 md:w-auto bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4"
        data-aos="fade-left"
      >
        <Image
          src="https://thepixelcurve.com/html/techwix/techwix/assets/images/info-3.png"
          height={50}
          width={50}
          alt="Location"
        />
        <h4 className="text-black text-2xl font-semibold">Visit our office</h4>
        <p className="text-gray-600">{settingsData?.office_location}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
