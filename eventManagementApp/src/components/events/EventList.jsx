import { EventCard } from "./EventCard";

export function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
