<template>
  <b-container fluid="md" class="my-2">
    <b-list-group v-for="(one, index) in userCommits" :key="`${index}-row`">
      <commit-item :commit="one" :branches="userBranches" :index="index" />
    </b-list-group>
  </b-container>
</template>

<script>
import CommitItem from '@/components/CommitItem';
import { mapState } from 'vuex';

export default {
  name: 'Commits',
  components: {
    CommitItem,
  },
  data() {
    return {
      owner: 'JohnCrash64',
      repo: 'take-home-test',
      loading: true,
      error: null,
      commits: [],
    };
  },
  computed: {
    ...mapState({
      userCommits: (state) => state.github.commits,
      userBranches: (state) => state.github.branches,
    }),
  },
  methods: {
    requestData() {
      this.$store.dispatch('getGithubCommitsAction', {
        owner: this.owner,
        repo: this.repo,
      });
      this.$store.dispatch('getGithubBranchesAction', {
        owner: this.owner,
        repo: this.repo,
      });
    },
  },
  mounted() {
    try {
      this.requestData();
    } catch (e) {
      this.error = e;
      this.loading = false;
    }
  },
};
</script>
