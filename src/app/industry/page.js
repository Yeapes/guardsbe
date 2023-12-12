import IndustryHero from "./IndustryHero/IndustryHero";
import Testimonials from "./Testimonials/Testimonials";
import Clients from "../about/Clients/Clients";
import Services from "../../components/Services/Services";
const baseUrl = process.env.BASE_URL;

const IndustryPage = async () => {
  const res = await fetch(`${baseUrl}/frontend-configuration`);
  const data = await res.json();

  const resData = data.data[0];

  let services = resData.industries;
  let testimonials = resData.testimonials;

  return (
    <>
      <IndustryHero />
      <Services services={services} />
      {/* <Cta /> */}
      <Testimonials testimonials={testimonials} />
      <Clients />
    </>
  );
};

export default IndustryPage;
