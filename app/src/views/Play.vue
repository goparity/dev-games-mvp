<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center justify-between text-slate-300 py-6">
        <div>
            <div class="flex justify-center">
                <div @click="subtract" class="cursor-pointer">-</div>
                <div class="mx-4">
                    {{ score }}
                </div>
                <div @click="add" class="cursor-pointer">+</div>
            </div>
            <Button @click="finish" text="Finish" class="mt-4 mb-16" />
        </div>
        <div>
            <RouterLink to="/score">
                <Button text="See score" class="mb-4" />
            </RouterLink>
            <RouterLink to="/">
                <Button text="Go to menu" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { RouterLink } from 'vue-router'
    import Button from '@/components/Button.vue'
    import { ref, onMounted } from 'vue'
    import fileContent from '../assets/maps/map.json'
    import VueCookies from 'vue-cookies'

    export default {
        components: {
            Button,
            RouterLink
        },
        setup() {
            const store = useStore()
            const score = ref(0)

            onMounted(() => {
                console.log(fileContent)
            })

            const add = () => {
                score.value = score.value + 1
            }

            const subtract = () => {
                if(score.value > 0)
                    score.value = score.value - 1
            }

            const finish = () => {
                store.dispatch('updateScore', score.value)
                VueCookies.set('last-score', score.value, '1y')
                
                let bestScore = VueCookies.get('best-score')
                if(score.value > bestScore)
                    VueCookies.set('best-score', score.value, '1y')
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