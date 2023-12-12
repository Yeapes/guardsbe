import AboutHero from "./AboutHero/AboutHero";
import Leaders from "./Leaders/Leaders";
import Services from "./Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Clients from "./Clients/Clients";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Experiences from "../../components/Experiences/Experiences";

const baseUrl = process.env.BASE_URL;

const AboutPage = async () => {
  const res = await fetch(`${baseUrl}/frontend-configuration`);
  const resData = await res.json();
  const data = resData.data[0];

  let services = data.industries;
  let who_we_are = data.who_we_are;
  let team = data.team;
  let testimonials = data.testimonials;
  let clients = data.clients;
  let business_history = data.business_history;

  return (
    <div>
      <AboutHero />
      <WhoWeAre who_we_are={who_we_are} />
      {/* <Counter /> */}
      <Services services={services} />
      <Experiences business_history={business_history} services={services} />
      {/* <Solutions who_we_are={who_we_are} services={services} /> */}
      <Leaders team={team} />
      <Testimonials testimonials={testimonials} />
      <Clients clients={clients} />
    </div>
  );
};

export default AboutPage;
