const app = Vue.createApp({
    data() {
        return {
            sitemap: {
                google: {
                    url: "https://www.google.com",
                    text: "Google"
                },
                yahoo: {
                    url: "https://www.yahoo.com",
                    text: "Yahoo"
                }
            }
        };
    }
});
app.mount("#app");