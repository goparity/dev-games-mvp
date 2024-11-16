<template>
    <div class="
        text-slate-300
        px-4 py-2
        w-64
        bg-slate-600
        rounded
        text-center
        text-xl
        hover:bg-slate-800
        cursor-pointer
    ">
        {{ text }}
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>