import actions from './actions'
import mutation from './mutation'
import getters from './getters'
import state from './state'

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutation
}
