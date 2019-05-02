import axios from 'axios'
import { FETCH_DATA } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_QUOTES } from './mutation-types'

const API_URI = 'http://jsonplaceholder.typicode.com/posts'

export default {
  async [FETCH_DATA]({ commit, state }) {
    if (!state.quotes.length) {
      console.log(state)
      console.log(!state.quotes.length)
      commit(UPDATE_STATUS, REQUESTING)
      try {
        const { data } = await axios.get(API_URI)
        commit(SET_QUOTES, data)
        commit(UPDATE_STATUS, DONE)
      } catch (error) {
        console.error(error)
        commit(UPDATE_STATUS, ERROR)
      }
    }
  }
}
