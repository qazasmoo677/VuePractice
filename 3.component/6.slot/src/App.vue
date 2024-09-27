<template>
  <main>
    <BaseCard>
      <template v-slot:title>
        <h2>Hello World</h2>
      </template>
      <template #content>
        <p>卡片內容</p>
        <p>插入HTML內容</p>
        <a href="#">超連結</a>
      </template>
    </BaseCard>
  </main>
</template>
<script>
  import BaseCard from './components/BaseCard.vue'

  export default {
    components: {
      BaseCard
    }
  }
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
