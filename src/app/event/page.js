import EventList from "./EventList/EventList";
import HeroSection from "../../components/HeroSection/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection
        pageBreadcumb="Events"
        pageName="Events"
        backgroundImage="https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/page-banner.jpg"
      />
      {/* <EventHero /> */}
      <EventList />
      {/* <EventTime />
      <AboutEvent /> */}
    </div>
  );
};

export default page;
