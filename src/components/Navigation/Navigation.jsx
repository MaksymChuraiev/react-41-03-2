import { StyledLink } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <div>
          <StyledLink to="/">Main</StyledLink>
          <StyledLink to="/events">Events</StyledLink>
        </div>
      )}
    </>
  );
};

export default Navigation;
