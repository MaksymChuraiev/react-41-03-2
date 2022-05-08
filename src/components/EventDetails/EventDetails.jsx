import {
  EventDetailsWrap,
  EventDetailsLink,
  EventDetailsImg,
  EventDetailsInfo,
  EventDetailsTitle,
  EventDetailstext,
  GoBackIcon,
} from './EventDetails.styled';

const EventDetails = ({ event, location }) => {
  return (
    <EventDetailsWrap>
      {/* <button type="button" onClick={goBack}>
        Back
      </button> */}
      <EventDetailsImg src={event.images[0].url} width={500} alt="" />
      <EventDetailsInfo>
        <EventDetailsTitle>{event.name}</EventDetailsTitle>
        <EventDetailstext>
          Genre: {event.classifications[0].genre.name}
        </EventDetailstext>
        <EventDetailstext>
          subGenre: {event.classifications[0].subGenre.name}
        </EventDetailstext>
        <EventDetailstext>
          Segment: {event.classifications[0].segment.name}
        </EventDetailstext>
        <EventDetailsLink to={location.state}>
          <GoBackIcon />
          Go back
        </EventDetailsLink>
      </EventDetailsInfo>
    </EventDetailsWrap>
  );
};

export default EventDetails;
