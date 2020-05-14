import axios from '@/plugins/axios';

const GET_SEARCH_DEVELOPERS = '/developers?_expand=title';

export default {
  searchDevelopers() {
    return axios.get(GET_SEARCH_DEVELOPERS).then((response) => response.data);
  },
};
