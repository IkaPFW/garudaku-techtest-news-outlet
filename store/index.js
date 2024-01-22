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
      const newsfeedIndex = state.newsfeed.indexOf(state.newsfeed.find((val) => val.key === value.key))
      const newsListIndex = state.newsList.indexOf(state.newsList.find((val) => val.key === value.key))

      value.content.unshift('\n\n')
      value.content.unshift(value.bannerImage)

      state.newsfeed[newsfeedIndex] = {
        ...state.newsfeed[newsfeedIndex],
        title: value.title,
        desc: value.content.join('\n\n').substring(0, 220).concat('...'),
        thumb: value.bannerImage
      }

      state.newsList[newsListIndex] = {
        ...state.newsList[newsListIndex],
        image: value.bannerImage,
        results: {
          ...state.newsList[newsListIndex].results,
          title: value.title,
          content: value.content,
          date: `${
            state.newsfeed[newsfeedIndex].time
          }, Edited in ${
            new Date().toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})
          }`
        }
      }
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
