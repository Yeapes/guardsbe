import Image from "next/image";
import "./Client.css";

const DEFAULT_IMAGE = process.env.DEFAULT_IMAGE;

const Client = ({ clientLogo }) => {
  return (
    <div className="mx-12" data-aos="fade-left">
      {clientLogo !== undefined ? (
        <Image src={clientLogo} height={150} width={300} alt="" />
      ) : (
        <Image src={DEFAULT_IMAGE} height={150} width={300} alt="" />
      )}
    </div>
  );
};

export default Client;
