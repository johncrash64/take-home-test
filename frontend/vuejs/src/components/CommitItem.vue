<template>
  <b-list-group-item :class="{'rounded-0': true, 'rounded-5 rounded-end ': index === 0}">
    <b-col>
      <b-row>
        <b-col class="col-lg-8 col-md-6 col-sm-4  text-truncate">
          <span class="fw-bolder">{{ commit.commit.message }} </span>
        </b-col>
        <b-col class="d-flex flex-row justify-content-end justify-items-center">
          <div class="d-flex align-items-center">
            <span v-if="commit.commit.verification.verified"
                  class="border border-dark text-success text-normal badge rounded-pill bg-light">Verfied</span>
            </div>
          <div class="btn-group mx-3" role="group" aria-label="Action">
            <button type="button" class="btn btn-light border border-dark" @click="copySha(index)">
              <input type="hidden" :value="commit.sha" :id="`sha-${index}`"/>
              <b-icon icon="clipboard"></b-icon>
            </button>
            <button type="button" class="btn btn-light text-primary border border-dark" @click="openCommit(commit.html_url)">
              {{ commit.sha | truncate(7) }}
            </button>
          </div>
          <button type="button" class="btn btn-light border border-dark" @click="openTree(commit.commit.tree.url)">
            <b-icon icon="code"></b-icon>
          </button>
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center">
        <b-col class="col-auto">
          <b-avatar :src="commit.author.avatar_url"/>
        </b-col>
        <b-col class="col-auto">
          <span class="px-1 fw-bold">{{ commit.author.login }}</span>
        </b-col>
        <b-col class="col-auto">
          <span class="col-8 px-1 text-truncate">commited {{ commit.commit.author.date | timeago }}</span>
        </b-col>
      </b-row>
    </b-col>
  </b-list-group-item>
</template>

<script>
import * as timeago from 'timeago.js';

export default {
  name: 'CommitItem',
  props: {
    commit: {
      type: Object,
      required: false,
      default: () => {},
    },
    branches: {
      type: Array,
      required: false,
      default: () => [],
    },
    index: {
      type: Number,
      required: false,
    },
  },
  components: {
  },
  data: () => ({
  }),
  filters: {
    timeago: timeago.format,
    truncate(text, length) {
      if (text.length > length) {
        return text.substring(0, length);
      }
      return text;
    },
  },
  methods: {
    openCommit(url) {
      window.open(url, '_blank');
    },
    openTree(url) {
      let urlReplaced = url.replace('api.github.com/', 'github.com/');
      urlReplaced = url.replace('git/trees', 'tree');
      window.open(urlReplaced, '_blank');
    },
    copySha(index) {
      const testingCodeToCopy = document.querySelector(`#sha-${index}`);
      testingCodeToCopy.setAttribute('type', 'text');
      testingCodeToCopy.select();
      document.execCommand('copy');
      testingCodeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
  },
  mounted: () => {},
};
</script>
