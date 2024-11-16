import { createStore } from 'vuex'
import score from '@/store/modules/score'

export default createStore({
  modules: {
    score,
  }
})
