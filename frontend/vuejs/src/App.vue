<template>
    <div id="app">
        <NavBar />
        <router-view/>
    </div>
</template>

<script type="text/javascript">
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
