const app = Vue.createApp({});

app.component("WordCount", {
    template:`
        <div>
            <input type="text" v-model="content"/>
            <p>您輸入了 {{ count}} 個字</p>
        </div>
    `,
    data() {
        return {
            content: ""
        };
    },
    computed: {
        count() {
            return this.content.length;
        }
    }
});

app.mount("#app");