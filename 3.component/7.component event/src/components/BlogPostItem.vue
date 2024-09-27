<template>
    <div>
        <a>{{ title }}</a>
        <button @click="$emit('deletePost', id)">刪除</button>
    </div>
</template>
<script>
    export default {
        props: {
            id: Number,
            title: String
        },
        emits: ["deletePost"]
    }
</script>
<style scoped>
    div {
        margin-bottom: 1em;
    }

    button {
        margin-left: 1em;
        padding: 0.5em 1em;
        color: white;
        border: none;
        background: linear-gradient(90deg, hsl(240deg, 50%, 50%), hsl(280deg, 50%, 50%));
    }
</style>