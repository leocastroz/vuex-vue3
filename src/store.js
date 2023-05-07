import Vuex from 'vuex'
import db from './db.js'
import router from '../src/router/index.js'

export default new Vuex.Store({
  state: {
    currentUser: null,
    isLoggedIn: false,
    userNotFound: false
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
      state.isLoggedIn = !!user
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
        console.log('user =>', user)
        if (user !== '') {
          router.push('/dashboard')
          console.log('COM ALGO')
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
        router.push('/about')
      } else {
        console.log('JÁ REGISTRADO')
      }
    },
    logout({ commit }) {
      console.log('LOGOUT')
      commit('setCurrentUser', null)
    }
  }
});