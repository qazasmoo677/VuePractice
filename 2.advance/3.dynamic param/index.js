const app = Vue.createApp({
    data() {
        return {
            attr: "placeholder",
            value: "請輸入文字",
            event: "change"
        };
    },
    methods: {
        handleInputChange(e) {
            alert(e.target.value);
        }
    }
});
app.mount("#app");