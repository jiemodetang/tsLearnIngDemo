import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newName: '新名字',
  },
  mutations: {
      modifyAName :(state, name) => { 
      state.newName = name // 把方法传递过来的参数，赋值给state中的newName
    }
  },
  actions: {
    modifyAName ({commit}, name) {
      return commit('modifyAName', name)
    }
  },
  modules: {
  }
})
