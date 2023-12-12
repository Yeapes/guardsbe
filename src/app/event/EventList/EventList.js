import EventItem from "./EventItem/EventItem";

const baseUrl = process.env.BASE_URL;
const EventList = async () => {
  const res = await fetch(`${baseUrl}/events`);
  const data = await res.json();
  const events = data.data[0].data;

  return (
    <div className="px-6 py-12 md:px-12 lg:px-20 xl:px-36 flex flex-col gap-12">
      <h1 className="text-center font-bold text-gray-600 text-6xl">
        Upcoming Events
      </h1>
      {events.map((event, index) => (
        <EventItem
          key={index}
          eventImage={event.bg_image}
          eventTitle={event.title}
          shortDesription={event.description}
          eventTime={event.event_date}
          eventPlace={event.location}
          eventId={event.id}
        />
      ))}
    </div>
  );
};

export default EventList;
