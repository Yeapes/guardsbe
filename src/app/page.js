import HeroSlider from "../components/HeroSlider/HeroSlider";
import Services from "../components/Services/Services";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Experiences from "../components/Experiences/Experiences";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Testimonials from "../components/Testimonials/Testimonials";
import Clients from "../components/Clients/Clients";
import Leaders from "../components/Leaders/Leaders";
import Blogs from "../components/Blogs/Blogs";
const baseUrl = process.env.BASE_URL;

export default async function Home() {
  const res = await fetch(`${baseUrl}/frontend-configuration`, {
    next: { revalidate: 1000 },
  });
  const data = await res.json();
  const datas = data.data[0];

  let sliders = datas.carousels;
  let who_we_are = datas.who_we_are;
  let why_choose_us = datas.why_choose_us;
  let case_studies = datas.case_studies;
  let testimonials = datas.testimonials;
  let clients = datas.clients;
  let team = datas.team;
  let blogs = datas.blogs;
  let services = datas.industries;
  let business_history = datas.business_history;

  return (
    <>
      <main className="max-w-full overflow-hidden">
        <HeroSlider sliders={sliders} />
        <Services services={services} />
        <WhoWeAre who_we_are={who_we_are} />
        <WhyChooseUs why_choose_us={why_choose_us} />
        <Experiences business_history={business_history} services={services} />
        <CaseStudy case_studies={case_studies} />
        <Testimonials testimonials={testimonials} />
        <Clients clients={clients} />
        <Leaders team={team} />
        <Blogs blogs={blogs} />
      </main>
    </>
  );
}
