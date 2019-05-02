import modules from './modules'

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules,

  actions: {
    APP_TRANSITION_END() { }
  }
}

