const app = Vue.createApp({
    data() {
        return {
            showAnswer: false,
            countDown: 5,
            timer: null
        };
    },
    computed: {
        showAnswerBtn() {
            return this.showAnswer == true
                ? "關閉 " + this.countDown
                : "顯示";
            }
    },
    methods: {
        toggleAnswer() {
            this.showAnswer = !this.showAnswer;
        }
    },
    watch: {
        showAnswer(newVal, oldVal) {
            if(newVal) {
                this.countDown = 5;
                if(this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = setInterval(() => {
                    this.countDown--;
                    if(this.countDown == 0) {
                        clearInterval(this.timer);
                        this.timer = null;
                        this.showAnswer = false;
                    }
                }, 1000);
            }
        }
    }
});
app.mount("#app");