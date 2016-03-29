import axios from 'axios';

import {
  UBER_SERVER_TOKEN,
  LYFT_BEARER
} from './keys';

const UBER_ROOT_URL = `https://api.uber.com/v1/estimates/price?`;
const LYFT_ROOT_URL = 'https://api.lyft.com/v1/cost?';

export const FETCH_ESTIMATES = 'FETCH_ESTIMATES';

export function fetchEstimates(sLat, sLng, eLat, eLng) {

  // axios.defaults.headers.common['Authorization'] = LYFT_BEARER;

  axios.defaults.headers.common['Authorization'] = "Token 3Om-KEk7wFwfY9B_5my4h_RF2r-_I8R40dVz8oQY";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

  let uberRequest = axios.get('https://api.uber.com/v1/estimates/price?start_latitude=37.625732&start_longitude=-122.377807&end_latitude=37.785114&end_longitude=-122.406677&server_token=3Om-KEk7wFwfY9B_5my4h_RF2r-_I8R40dVz8oQY');

  //let lyftRequest = axios.get(`${LYFT_ROOT_URL}start_lat=${sLat}&start_lng=${sLng}&end_lat=${eLat}&end_lng=${eLng}`);
  return {
    type: FETCH_ESTIMATES,
    payload: uberRequest
  }

  // payload: {
  //   uberRequest: uberRequest,
  //   lyftRequest: lyftRequest
  // }
}
