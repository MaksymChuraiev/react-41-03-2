import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import * as eventsApi from '../api/api';
import EventsList from 'components/EventsList/EventsList';

const EventsView = () => {
  const [events, setEvents] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      eventsApi.fetchEvents().then(setEvents);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {events && <EventsList state={location.pathname} events={events} />}
      <Outlet />
    </>
  );
};

export default EventsView;
