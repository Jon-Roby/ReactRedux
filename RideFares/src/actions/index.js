import axios from 'axios';

import {
  UBER_SERVER_TOKEN,
  LYFT_BEARER
} from './keys';

const UBER_ROOT_URL = `https://api.uber.com/v1/estimates/price?`;
const LYFT_ROOT_URL = 'https://api.lyft.com/v1/cost?';

export const FETCH_ESTIMATES = 'FETCH_ESTIMATES';

export function fetchEstimates(sLat, sLng, eLat, eLng) {

  axios.defaults.headers.common['Authorization'] = LYFT_BEARER;
  let lyftRequest = axios.get(`${LYFT_ROOT_URL}start_lat=${sLat}&start_lng=${sLng}&end_lat=${eLat}&end_lng=${eLng}`);
  return {
    type: FETCH_ESTIMATES,
    payload: lyftRequest
  }

  // payload: {
  //   uberRequest: uberRequest,
  //   lyftRequest: lyftRequest
  // }
}
