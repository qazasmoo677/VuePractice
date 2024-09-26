const app = Vue.createApp({
    data() {
        return {
            data: ["Nxde", "Tomboy", "Fate"],
            todos: [
                { text: "讀書", complete: false },
                { text: "吃飯", complete: true },
                { text: "寫作業", complete: false },
                { text: "睡覺", complete: true }
            ]
        };
    }
});
app.mount("#app");