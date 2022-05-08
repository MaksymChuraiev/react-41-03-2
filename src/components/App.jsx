// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import * as Scroll from 'react-scroll';
import { Routes, Route } from 'react-router-dom';
import EventDetailsView from 'views/EventDetailsView';
import EventsSubView from 'views/EventsSubView';
import EventsView from 'views/EventsView';
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventsId" element={<EventsSubView />} />
        </Route>
        <Route path="events/:eventsId/details" element={<EventDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};

// {/* <Routes>
// <Route path="/" element={<Layout />}>
//   <Route index element={<HomeView />} />
//   <Route path="events" element={<EventsView />}>
//     <Route path=":eventsId" element={<EventsSubView />} />
//   </Route>{' '}
//   */
//   <Route path="events/:eventsId/details" element={<EventDetail />} />
//   <Route path="*" element={<NotFoundView />} />
// </Route>
// </Routes> */}
