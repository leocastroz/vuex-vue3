import Vuex from 'vuex'
import Dexie from 'dexie'

const db = new Dexie('userDb')
db.version(1).stores(
    { users: '++id,email,password' }
)

export default new Vuex.Store({
  state: {
    currentUser: null,
    isLoggedIn: false
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
      state.isLoggedIn = !!user
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const user = await db.users.get({ email, password })
      if (user) {
        commit('setCurrentUser', user)
        console.log('LOGADO')
      } else {
        console.log('SEM USUÁRIO')
      }
    },
    async register({ commit }, { email, password }) {
      const count = await db.users.where('email').equals(email).count()
      if (count === 0) {
        const user = await db.users.add({ email, password })
        commit('setCurrentUser', { id: user, email });
        console.log('registrado')
      } else {
        console.log('já registrado')
      }
    },
    logout({ commit }) {
      console.log('LOGOUT')
      commit('setCurrentUser', null)
    }
  }
});

