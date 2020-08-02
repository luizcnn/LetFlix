const urlBackend = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://letflix.herokuapp.com';

export default {
  urlBackend,
};
