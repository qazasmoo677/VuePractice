import ComponentA from "./component/ComponentA.js";
import ComponentB from "./component/ComponentB.js";
const app = Vue.createApp({
    components: {
        ComponentA,
        ComponentB
    }
});
app.mount("#app");