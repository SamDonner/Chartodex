const axios = require('axios');
const keys = require('../../config/keys');


const getQuotes = async (coin) => {
 
  const symbols = coin.map(coin => {return coin.coin})
  try {const res = await axios({
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    responseType:'json',
    params: {
      symbol: symbols.join(',')
    },
    headers: {
      'X-CMC_PRO_API_KEY': keys.CMCKey
    },
  })

  const portfolio = [];
  const obj = res.data.data;

  Object.keys(res.data.data).map((sym, i) => {
    let coinData = {
      coin: coin[i].coin, 
      holdings: coin[i].holdings,
      price: obj[sym].quote.USD.price,
      change: obj[sym].quote.USD.percent_change_24h,
      _id: coin[i]._id,
      user: coin[i].user
    }
    portfolio.push(coinData)
  });
  return portfolio;
}catch(error) {
    console.log(error);
  };
  
  }

module.exports.getQuotes = getQuotes;
  
