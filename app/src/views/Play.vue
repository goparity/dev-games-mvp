<template>
    <div>
        <div class="flex">
            <div @click="add" class="cursor-pointer">+</div>
            <div class="mx-4">
                {{ score }}
            </div>
            <div @click="subtract" class="cursor-pointer">-</div>
        </div>
        <div @click="finish" class="cursor-pointer">Finish</div>
        <RouterLink to="/score">
            <div>
                See Score
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
    import { useStore } from 'vuex'
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'
    export default {
        setup() {
            const store = useStore()
            const score = ref(0)

            const add = () => {
                score.value = score.value + 1
            }

            const subtract = () => {
                if(score.value > 0)
                    score.value = score.value - 1
            }

            const finish = () => {
                store.dispatch('updateScore', score.value)
            }

            return {
                score,
                add,
                subtract,
                finish
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>