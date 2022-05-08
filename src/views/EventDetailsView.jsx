import { useLocation } from 'react-router-dom';
import useFetchEvent from 'hooks/useFetchEvent';
import { Container, LoadingTitle } from 'components/Container/Container.styled';
import EventDetails from 'components/EventDetails/EventDetails';

const EventDetailsView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(location?.state ?? '/');
  // };

  console.log(location);

  return (
    <Container>
      {!event && <LoadingTitle>Loading...</LoadingTitle>}
      {event && <EventDetails location={location} event={event} />}
    </Container>
  );
};

export default EventDetailsView;
