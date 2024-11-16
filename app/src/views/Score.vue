<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center justify-between text-slate-300 py-6">
        <div class="text-center text-xl">
            <div>
                Your score:
            </div>
            <div>
                {{ score }}
            </div>
        </div>
        <div>
            <RouterLink to="/play">
                <Button text="Play again" class="mt-16 mb-4" />
            </RouterLink>
            <RouterLink to="/">
                <Button text="Go to menu" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import Button from '@/components/Button.vue'
    export default {
        components: {
            Button,
            RouterLink
        },
        setup() {
            const store = useStore()
            const score = computed(() => {
                return store.state.score.score
            })

            return {
                score
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>