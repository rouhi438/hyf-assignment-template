export function EventCard({ event }) {
  return;
  <div className="event-card">
    <h3 className="title">{event.title}</h3>
    <p>
      <strong>Date: </strong>
      {event.date}
    </p>
    <p>
      <strong>Time: </strong> {event.time}
    </p>
    <p>
      <strong>Venue: </strong>
      {event.venue}
    </p>
  </div>;
}
