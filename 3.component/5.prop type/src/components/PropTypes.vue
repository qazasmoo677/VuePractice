<template>
    <div>
        <p>指定類型範例</p>
        <p>typeof({{ name }}) = {{ typeof(name) }}</p>
        <p>typeof({{ age }}) = {{ typeof(age) }}</p>
        <p>typeof({{ isStudent }}) = {{ typeof(isStudent) }}</p>
    </div>
</template>
<script>
    export default {
        props: {
            name: String,
            age: {
                type: Number,
                required: true,
                validator(value) {
                    return value > 0;
                }
            },
            isStudent: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
<style>
</style>