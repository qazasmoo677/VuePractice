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
    },
    methods: {
        toggleAnswer() {
            this.showAnswer = !this.showAnswer;
        }
    }
});
app.mount("#app");