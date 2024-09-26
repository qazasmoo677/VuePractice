const app = Vue.createApp({
    data() {
        return {
            showAnswer: false
        };
    },
    computed: {
        showAnswerBtn() {
            return this.showAnswer==true?  "關閉": "顯示";
        }
    }
});
app.mount("#app");