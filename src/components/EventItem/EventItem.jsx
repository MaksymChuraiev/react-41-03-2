import {
  EventImg,
  EventText,
  EventLink,
  EventItemWrap,
  EventInfoWrap,
} from './EventItem.styled';
import { LoadingTitle } from 'components/Container/Container.styled';

const EventItem = ({ event, state }) => {
  return (
    <>
      {!event && <LoadingTitle>Loading...</LoadingTitle>}
      {event && (
        <EventItemWrap>
          <EventImg src={event.images[0].url} width={500} alt="" />
          <EventInfoWrap>
            <EventText>{event.name}</EventText>
            <EventLink to="details" state={state}>
              More details
            </EventLink>
          </EventInfoWrap>
        </EventItemWrap>
      )}
    </>
  );
};

export default EventItem;
