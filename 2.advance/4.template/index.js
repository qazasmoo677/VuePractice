const app = Vue.createApp({
    data() {
        return {
            todos: ["吃飯", "睡覺", "唱歌"]
        };
    },
    computed: {
        needShow() {
            return this.todos.length > 0;
        }
    },
    methods: {
        clearTodos() {
            this.todos = [];
        }
    }
});
app.mount("#app");