import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";
import EventsData from "./EventsData/EventsData";

const Page = ({ params }) => {
  const eventId = params.id;
  return (
    <div>
      <EventsData eventId={eventId} />
    </div>
  );
};

export default Page;
