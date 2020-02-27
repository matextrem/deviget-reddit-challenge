import axios from 'axios';

import { BASE_URI } from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URI,
});

export { api };
