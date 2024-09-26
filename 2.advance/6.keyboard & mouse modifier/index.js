const app = Vue.createApp({
    data() {
        return {
            comments: ["你好棒", "你很棒", "你超級棒"],
            comment: ""
        };
    },
    methods: {
        addComment() {
            this.comments.push(this.comment);
            this.comment = "";
        }
    }
});
app.mount("#app");