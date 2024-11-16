<template>
    <div>
        <div>
            {{ score }}
        </div>
        <RouterLink to="/play"> 
            <div>
                Play again
            </div>
        </RouterLink>
        <RouterLink to="/">
            <div>
                Go to menu
            </div>
        </RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    export default {
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