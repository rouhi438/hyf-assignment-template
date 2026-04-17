export function EventDetail({ event }) {
  if (!event) {
    return <p>No event founded!</p>;
  }
  return (
    <div className="event-detail">
      <img src="/assets/" alt="eventImage" />
      <h2>{event.title}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Venue:</strong> {event.venue}
      </p>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
    </div>
  );
}
