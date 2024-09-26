const app = Vue.createApp({
    data() {
        return {
            books: []
        };
    },
    methods: {
        async fetchBooks() {
            let booksData = await fetch("./books.json");
            let books = await booksData.json();
            this.books = books;
        }
    },
    created() {
        this.fetchBooks();
    }
});
app.mount("#app");