import { Container } from 'components/Container/Container.styled';
import { EList, EItem, ELink } from './EventsList.styled';

const EventsList = ({ events, state }) => {
  return (
    <Container>
      <EList>
        {events.map(event => (
          <EItem key={event.id}>
            <ELink to={`${event.id}`} state={state}>
              {event.name}
            </ELink>
          </EItem>
        ))}
      </EList>
    </Container>
  );
};

export default EventsList;
