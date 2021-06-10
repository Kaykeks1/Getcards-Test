const axios = require('axios');

const resolvers = {
  calculatePrice: async ({ type, margin, exchangeRate }) => {
    let currentBitcoinPriceUSD;
    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        currentBitcoinPriceUSD = response.data.bpi.USD.rate_float
      })
      .catch(function (error) {
      });
    if (currentBitcoinPriceUSD) {
      let priceWithMargin = currentBitcoinPriceUSD * (margin / 100)
      let adjustedPriceUSD;
      if (type === 'sell') {
        adjustedPriceUSD = currentBitcoinPriceUSD - priceWithMargin
      } else if (type === 'buy') {
        adjustedPriceUSD = currentBitcoinPriceUSD + priceWithMargin
      }
      return adjustedPriceUSD / exchangeRate;
    }
  },
}

module.exports = resolvers;
