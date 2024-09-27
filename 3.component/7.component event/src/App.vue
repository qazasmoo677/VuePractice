<template>
  <main>
    <dev>
      <BlogPostItem v-for="item in postitems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        @deletePost="handleDeletePost"/>
    </dev>
  </main>
</template>
<script>
  import BlogPostItem from './components/BlogPostItem.vue'

  export default {
    components: {
      BlogPostItem
    },
    data() {
      return {
        postitems: [
          {
            id: 1,
            title: "Post 1"
          },
          {
            id: 2,
            title: "Post 2"
          },
          {
            id: 3,
            title: "Post 3"
          }
        ]
      };
    },
    methods: {
      handleDeletePost(id) {
        this.postitems = this.postitems.filter((p) => p.id != id);
      }
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
