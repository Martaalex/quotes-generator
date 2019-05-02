export default {
  status: state => state.status,
  quotes: state => {
    return state.quotes.map(quote => {
      quote = { ...quote }

      return quote
    })
  }
}
