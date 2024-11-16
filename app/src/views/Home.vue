<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-slate-300 py-6">
        <div class="text-3xl mb-16">
                Welcome to the dev games
        </div>
        <RouterLink to="/play">
            <Button text="Play" class="mb-4" />
        </RouterLink>
        <RouterLink to="/score">
            <Button text="Score" />
        </RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import Button from '@/components/Button.vue'
    export default {
        components: {
            Button,
            RouterLink
        }
    }
</script>

<style lang="scss" scoped>

</style>