import axios from 'axios';

const KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export const fetchEvents = async () => {
  const res = await axios.get(`events?size=20&apikey=${KEY}`);
  return res.data._embedded.events;
};

export const fetchEventsById = async id => {
  const resById = await axios.get(`events/${id}?apikey=${KEY}`);
  return resById.data;
};
