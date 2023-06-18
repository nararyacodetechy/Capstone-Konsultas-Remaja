import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}consultants`,
  DETAIL: (id) => `${CONFIG.BASE_URL}consultants/${id}`,
  ARTICLES: `${CONFIG.BASE_URL}articles`,
};

export default API_ENDPOINT;
