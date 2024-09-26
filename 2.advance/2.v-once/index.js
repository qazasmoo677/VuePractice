const app = Vue.createApp({
    data() {
        return {
            name: "王小明"
        };
    },
    methods: {
        changeName() {
            this.name = "陳阿花";
        }
    }
});
app.mount("#app");