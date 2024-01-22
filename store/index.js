export const state = () => ({
    newsfeed: [],
    newsList: [],
})

export const mutations = {
    setNewsfeed (state, value) {
        state.newsfeed = value
    },
    addNews (state, value) {
      state.newsList.push(value)
    },
    editNews (state, value) {
      console.log(value)
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        const response = await this.$axios.$get('https://the-lazy-media-api.vercel.app/api/games')
        commit('setNewsfeed', response)
    },
    async getNewsDetail({ commit, state }, key) {
      await this.$axios.get(`https://the-lazy-media-api.vercel.app/api/detail/${key}`)
        .then(response => {
          const exist = state.newsList.find((val) => {
              return val.results.title === response.data.results.title
            })

          if (!exist) commit('addNews', {key, results: response.data.results})
        })
        .catch(e => {
        })
    }
}
