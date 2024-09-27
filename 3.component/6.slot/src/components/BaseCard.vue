<template>
    <div class="card">
        <div class="title">
            <slot name="title">沒有標題</slot>
        </div>
        <div class="content">
            <slot name="content">沒有東西</slot>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    .card {
        border: 1px solid hsl(250deg, 100%, 80%);
        padding: 20px;
        border-radius: 8px;
    }
    .title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 12px;
    }
</style>