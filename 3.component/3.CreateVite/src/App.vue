<script>
  import WordCount from './components/WordCount.vue'

  export default {
    components: {
      WordCount
    }
  }
</script>

<template>
  <main>
    <div>
      <p>字數統計</p>
      <WordCount/>
    </div>
  </main>
</template>

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
