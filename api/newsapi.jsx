var axios = require('axios');

const NEWS_API_URL = 'https://newsapi.org/v1/articles?sortBy=latest'

module.exports = {

  getNews: function (provider) {
    var requestUrl = `${NEWS_API_URL}&source=${provider}`;
    var config = {
        headers:
        {
          'X-Api-Key': 'c4ae46247feb4d0081e1f5bfcadf2c72'}
        };
      return axios.get(requestUrl,config).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }
        else{
          return res.data.articles;
        }
      },function(res) {
        throw new Error(res.data.message);
      })
  }


}
