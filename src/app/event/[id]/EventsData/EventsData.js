import EventHero from "../../EventHero/EventHero";
import EventTime from "../../EventTime/EventTime";
import AboutEvent from "../../AboutEvent/AboutEvent";
import Speakers from "../Speakers/Speakers";

const baseUrl = process.env.BASE_URL;
const EventsData = async ({ eventId }) => {
  const res = await fetch(`${baseUrl}/event/${eventId}`);
  const data = await res.json();
  const eventsData = data.data[0];

  return (
    <div>
      <EventHero eventsData={eventsData} />
      <EventTime eventsData={eventsData} />
      <AboutEvent eventsData={eventsData} />
      {/* <EventFeatures eventsData={eventsData} /> */}
      <Speakers eventsData={eventsData} />
    </div>
  );
};

export default EventsData;
