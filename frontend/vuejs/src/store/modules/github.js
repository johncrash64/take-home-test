import githubApi from '@/api/githubApi';

const actions = {
  async getGithubCommitsAction({ dispatch }, args) {
    const { data } = await githubApi.getCommitsAPI(args);
    dispatch('setGithubCommitsAction', data.data);
  },
  async getGithubBranchesAction({ dispatch }, args) {
    const { data } = await githubApi.getBranchesAPI(args);
    dispatch('setGithubBranchesAction', data.data);
  },
  setGithubCommitsAction({ commit }, args) {
    commit('setGithubCommitsMutation', args);
  },
  setGithubBranchesAction({ commit }, args) {
    commit('setGithubBranchesMutation', args);
  },
};

const mutations = {
  setGithubCommitsMutation(state, payload) {
    state.commits = [...payload];
  },
  setGithubBranchesMutation(state, payload) {
    state.branches = [...payload];
  },
};

const state = {
  commits: [],
  branches: [],
};

export default {
  state,
  actions,
  mutations,
};
