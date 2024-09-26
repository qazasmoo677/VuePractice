const app = Vue.createApp({
    data() {
        return {
            username: ""
        };
    },
    methods: {
        clearUserName() {
            this.username = "";
        }
    }
});
app.mount("#app");