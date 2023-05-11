import Vuex from 'vuex'
import db from './db.js'
import router from '../src/router/index.js'

export default new Vuex.Store({
  state: {
    currentUser: null,
    userNotFound: false
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    setUserNotFound(state, value) {
      state.userNotFound = value
    },
    clearUserNotFound(state) {
      state.userNotFound = false
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const user = await db.users.get({ email, password })
      if (user) {
        commit('setUserNotFound', false)
        console.log('LOGADO')
        if (user !== '') {
          router.push('/dashboard')
        } else {
          console.log('SEM ALGO')
        }
      } else {
        commit('setUserNotFound', true)
        setTimeout(() => {
          commit('clearUserNotFound')
        }, 10000)
      }
    },
    async register({ commit }, { email, password }) {
      const count = await db.users.where('email').equals(email).count()
      if (count === 0) {
        const user = await db.users.add({ email, password })
        commit('setCurrentUser', { id: user, email })
        console.log('VOCÊ FOI REGISTRADO')
        router.push('/with-register')
      } else {
        console.log('JÁ REGISTRADO')
        router.push('/about')
      }
    },
    logout({ commit }) {
      console.log('LOGOUT')
      commit('setCurrentUser', null)
    }
  }
});