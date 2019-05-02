import SET_QUOTES from './mutation-types'

export default {
  [SET_QUOTES](state, quotes) {
    console.log(quote)
    state.quotes = quotes.map((quote, index) => {
      quote.id = index + 1

      return quote

    })
  }
}
