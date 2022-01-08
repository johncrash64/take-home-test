<template>
    <b-container fluid class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
