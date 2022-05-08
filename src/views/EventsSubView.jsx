import { useLocation } from 'react-router-dom';
import useFetchEvent from 'hooks/useFetchEvent';
import { Container } from 'components/Container/Container.styled';
import EventItem from 'components/EventItem/EventItem';

const EventsSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <Container>
      {!event && <h2>Loading...</h2>}
      {event && <EventItem event={event} state={location.state} />}
    </Container>

    // <div>
    //   {!event && <h2>Loading...</h2>}
    //   {event && (
    //     <div>
    //       <EventImg src={event.images[0].url} width={300} alt="" />
    //       <EventText>{event.name}</EventText>
    //       <EventLink to="details" state={location.state}>
    //         More details
    //       </EventLink>
    //     </div>
    //   )}
    // </div>
  );
};

export default EventsSubView;
