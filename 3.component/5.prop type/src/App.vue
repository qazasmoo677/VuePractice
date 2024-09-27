<template>
  <main>
    <PropTypes name="Andy" :age="20"/>
  </main>
</template>
<script>
import PropTypes from './components/PropTypes.vue';

export default {
  components: {
    PropTypes
  }
};
</script>
<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
