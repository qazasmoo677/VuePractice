const app = Vue.createApp({
    data() {
        return {
            name: {
                firstName: "小明",
                lastName: "王"
            }
        };
    }
});
app.mount("#app");