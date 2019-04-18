import httpClient from '../utilities/httpClient'

const fetchSpots = () => {
  return httpClient.get('/api/spots')
};

const fetchRotations = () => {
  return httpClient.get('/api/rotations')
};

export default {
	fetchSpots,
	fetchRotations
}