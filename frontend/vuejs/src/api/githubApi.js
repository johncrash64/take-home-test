import axios from 'axios';

const baseEndpoint = '/api/v1/github';
const getCommits = 'commits';
const getBranches = 'branches';

export default {
  async getCommitsAPI(params) {
    return axios.get(`${baseEndpoint}`, {
      params: {
        ...params,
        api: getCommits,
        per_page: 100,
        page: 1,
      },
    });
  },
  async getBranchesAPI(params) {
    return axios.get(`${baseEndpoint}`, {
      params: {
        ...params,
        api: getBranches,
        per_page: 100,
        page: 1,
      },
    });
  },
};
