import axios from "axios";

const BASE_API_URL = 'http://localhost:8080/api/v1/'
const SERVICES_ENDPOINT = 'services'

class OffersService {
  getAllServices() {
    return axios.get(BASE_API_URL + SERVICES_ENDPOINT);
  }
}

export default new OffersService();