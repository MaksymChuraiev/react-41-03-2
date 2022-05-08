import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as eventsApi from '../api/api';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventsId } = useParams();

  useEffect(() => {
    eventsApi.fetchEventsById(eventsId).then(setEvent);
  }, [eventsId]);

  return event;
};

export default useFetchEvent;
