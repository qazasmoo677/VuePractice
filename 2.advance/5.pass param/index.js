const app = Vue.createApp({
    data() {
        return {
            todos: [
                {
                    Id: 1,
                    content: "吃飯"
                },
                {
                    Id: 2,
                    content: "睡覺"
                },
                {
                    Id: 3,
                    content: "唱歌"
                }
            ]
        };
    },
    methods: {
        handleClick(msg, e) {
            alert("你點了第" + msg + "個\nX軸是" + e.clientX + "、Y軸是" + e.clientY)
        }
    }
});
app.mount("#app");