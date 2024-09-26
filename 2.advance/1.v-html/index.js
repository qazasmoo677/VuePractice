const app = Vue.createApp({
    data() {
        return {
            content: `<p>這是一段<a style="color: orange;">HTML</a>語法</p>`
        };
    }
});
app.mount("#app");