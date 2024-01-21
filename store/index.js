export const state = () => ({
    newsfeed: [],
    newsList: [],
})

export const mutations = {
    setNewsfeed (state, value) {
        state.newsfeed = value
    },
    addNews (state, value) {
        const exist = this.newsList?.map((val) => {
            return val.key === value.key
        })

        if (!exist) state.newsList.push(value)
    },
    editNews (state, value) {

    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        const response = await this.$axios.$get('https://the-lazy-media-api.vercel.app/api/games')
        commit('setNewsfeed', response)
    },
    async getNewsDetail({ commit }, key) {
      const {results} = await this.$axios.$get(`https://the-lazy-media-api.vercel.app/api/detail/${key}`)
      commit('addNews', {
        key,
        results
      })
    }
}
