const app = Vue.createApp({
    data() {
        return {
            // books: []
            books: ["Javascript 基礎語法講解", "Vue 入門到精通", "React 入門到精通"]
        };
    }
});
app.mount("#app");