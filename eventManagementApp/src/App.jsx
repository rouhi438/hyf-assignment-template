import { Layout } from "./components/layout/Layout";
import { EventList } from "./components/events/EventList";
import { EventDetail } from "./components/events/EventDetail";
import { mockEvents } from "./data/MockEvents";
function App() {
  return (
    <Layout>
      <h2>My Events List</h2>
      <EventList events={mockEvents} />
      <h2>Event Details</h2>
      <EventDetail event={mockEvents[2]} />
    </Layout>
  );
}

export default App;
