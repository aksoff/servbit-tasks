import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
      console.log(state.tasks)
    },
    updateTask(state, {id, description, deadline}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      const status = new Date(deadline) > new Date() ? 'active' : 'outdated'
      tasks[idx] = {...task, description, deadline, status}
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },

  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find((t => t.id === id))
  },

  modules: {
  }
})
