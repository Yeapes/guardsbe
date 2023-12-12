import Image from "next/image";
import Link from "next/link";
import FooterLinksSection from "./FooterLinksSection/FooterLinksSection";
import "./Footer.css";
const baseUrl = process.env.BASE_URL;

const Footer = async ({ settingsData }) => {
  const year = new Date().getFullYear();

  const res = await fetch(`${baseUrl}/frontend-configuration`);
  const data = await res.json();

  const resData = data.data[0];

  let services = resData.industries;

  return (
    <footer className="">
      <div
        className="footer-cta px-12 py-16 lg:px-16 xl:px-24 bg-cover mx-12 lg:mx-24 xl:mx-36 -mb-10 relative z-10 rounded-lg mt-12 flex items-center flex-col lg:flex-row justify-between"
        style={{
          backgroundImage: `url(${new URL(
            "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/cta-bg.jpg"
          ).toString()})`,
        }}
      >
        <div className="absolute left-4/5 lg:-left-10 -top-10 bg-[#010f31] p-6 rounded-full">
          <Image
            src="https://thepixelcurve.com/html/techwix/techwix/assets/images/cta-icon2.png"
            height={70}
            width={70}
            alt="headphone"
          />
        </div>
        <h2
          className="ms-0 lg:ms-24  mt-10 lg:mt-0 text-white text-2xl lg:text-3xl  font-semibold text-center lg:text-left"
          data-aos="fade-right"
        >
          We’re Delivering the best customer Experience
        </h2>
        <button
          className="bg-white z-1 px-4 md:px-12 py-4 rounded-lg mx-auto block mt-4 lg:mt-0 relative footer-cta-button hover:text-white"
          style={{ zIndex: 1 }}
          data-aos="fade-left"
        >
          <a
            className="text-lg whitespace-nowrap lg:text-3xl text-center font-semibold"
            href={`cell:${settingsData?.phone_number_1}`}
          >
            {settingsData?.phone_number_1}
          </a>
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${new URL(
            "https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/footer-bg.jpg"
          ).toString()})`,
        }}
      >
        <div className="footer-links p-12 lg:p-24 xl:p-36 bg-cover grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="" data-aos="fade-right">
            {settingsData?.logo !== "undefined" ? (
              <Image
                // src="https://thepixelcurve.com/html/techwix/techwix/assets/images/logo-white.png"
                src={settingsData?.logo}
                height={60}
                width={300}
                alt="Visiwave"
              />
            ) : (
              <p className="text-white text-2xl">Visiwave</p>
            )}

            <p className="text-white my-4 text-xl">
              {settingsData?.footer_tagline}
            </p>
            <div className="flex items-center justify-start gap-6">
              <div className="bg-white rounded-full p-2">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="facebook"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#6563ff"
                      d="M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25.233 25.233 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22h3.671Z"
                      data-name="Brand Logos"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-white rounded-full p-2">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="twitter"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#03A9F4"
                      d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-white rounded-full p-2">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="linkedin"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#6563ff"
                      d="M5.004 7h-.029a2.235 2.235 0 1 1 .057-4.457A2.235 2.235 0 1 1 5.004 7ZM3.018 10h4v12h-4zM17.518 10a4.473 4.473 0 0 0-3.5 1.703V10h-4v12h4v-5.5a2 2 0 0 1 4 0V22h4v-7.5a4.5 4.5 0 0 0-4.5-4.5Z"
                      data-name="Brand Logos"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <FooterLinksSection
            title="Usefull Links"
            items={[
              { title: "Terms and Conditions", itemUrl: "/terms" },
              { title: "About Company", itemUrl: "/about" },
              { title: "Policy", itemUrl: "/policy" },
            ]}
          />

          <FooterLinksSection title="Our Industry" items={services} />

          <div className="" data-aos="fade-left">
            <h3 className="text-2xl text-white font-semibold py-4">
              Contact Information
            </h3>
            <ul>
              <li className="flex items-center gap-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="phone-call"
                  className="h-6 w-6 "
                  stroke="lightblue"
                >
                  <g data-name="Layer 3">
                    <path d="M60,31.81a1,1,0,0,1-1-1C59,16.57,47.75,5,33.89,5a1,1,0,1,1,0-2C48.84,3,61,15.48,61,30.83A1,1,0,0,1,60,31.81Z"></path>
                    <path d="M49.1 31.81a1 1 0 0 1-1-1A14.46 14.46 0 0 0 33.89 16.17a1 1 0 0 1 0-2 16.43 16.43 0 0 1 16.2 16.62A1 1 0 0 1 49.1 31.81zM55 52.83a19.93 19.93 0 0 1-5.31 6.6A7.25 7.25 0 0 1 44 60.9c-9.07-1.54-18-5.52-26.91-14.28-8.51-9.13-12.5-18.45-14-27.76A7.74 7.74 0 0 1 4.52 13 19.51 19.51 0 0 1 11 7.5a2.61 2.61 0 0 1 3.78 0l8.81 9.15a3.11 3.11 0 0 1 0 4.24l-6.24 6.77C20 33.47 29.79 43.55 35.41 46.27L42 39.84a2.91 2.91 0 0 1 4.12 0l8.9 9A2.81 2.81 0 0 1 55 52.83z"></path>
                  </g>
                </svg>
                <span className="text-white text-lg">
                  {settingsData?.phone_number_1}, {settingsData?.phone_number_2}
                </span>
              </li>
              <li className="flex items-center gap-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="mail"
                  stroke="lightblue"
                >
                  <g fill="none" fillRule="evenodd" stroke="#4A4A4A">
                    <path d="M3.11 9.749v9.366a2 2 0 0 0 2 2h14.743a2 2 0 0 0 2-2V9.749a2 2 0 0 0-.834-1.626l-7.954-5.705a1 1 0 0 0-1.166 0L3.945 8.123A2 2 0 0 0 3.11 9.75z"></path>
                    <path d="M21.84 9.231a2 2 0 0 1-.821 1.4l-2.249 1.614-.724.52-4.982 3.573a1 1 0 0 1-1.166 0l-7.954-5.705a2 2 0 0 1-.815-1.348"></path>
                  </g>
                </svg>
                <span className="text-white text-lg">
                  {settingsData?.email}
                </span>
              </li>
              <li className="flex items-center gap-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="location-pin"
                  className="w-6 h-6"
                  stroke="lightblue"
                >
                  <g data-name="Layer 2">
                    <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z"></path>
                    <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z"></path>
                  </g>
                </svg>
                <span className="text-white text-lg">
                  {settingsData?.office_location}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-1 border-gray-700" />
        <div className="text-white">
          <p className="text-white py-6 text-center text-sm">
            © Copyrights {year} VisiWave all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
