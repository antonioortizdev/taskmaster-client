import { createStore } from 'vuex'
import { tasks } from './tasks'

export const store = createStore({
  modules: {
    tasks,
  }
})