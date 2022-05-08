import AppBar from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
