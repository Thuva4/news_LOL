var React = require('react');
var Newsapi= require('api/newsapi.jsx');
var news_provider = ['engadget','gruenderszene','techcrunch','techradar','wired-de',
'hacker-news','the-next-web','the-verge'];



var Newspage = React.createClass({



    handleSearch: function(provider) {
        var that = this;
        Newsapi.getNews(provider).then(function(result) {
          that.setState((news_articles) => ({ news_articles: that.state.news_articles.concat(result) }));
          console.log(that.state.news_articles);
        }, function(errorMessage) {

            alert(errorMessage);

        });
        },
    getallresults: function(){
      this.setState(
        {news_articles: []}
      )
      for (var i = 0; i < news_provider.length; i++) {
        this.handleSearch(news_provider[i]);
        //Do something
    }
  },
  componentWillMount(){
      this.getallresults();
  },



    render: function() {
      var news_articles = this.state.news_articles;
        return (
          <div className='row'>
            <div className="row">
              {renderMessage()}
            </div>
          </div>
        );

        function renderMessage() {
          var body = [];
          for (var i = 0; i < news_articles.length; i++) {
            if(news_articles[i]['urlToImage']!==null){
        var str = news_articles[i]['title'];
        body.push(
          <div className="col-md-3 portfolio-item hvr-grow" key = {i} >
             <a href={news_articles[i]['url']} target="_blank" data-toggle="tooltip" title={news_articles[i]['description']}>
                  <img className="img-responsive imageClip" src={news_articles[i]['urlToImage']} alt=""></img>
                  <lable className="pagination-centered">{str}</lable>
              </a>
              <div>
                <br></br>
              </div>
        </div>

);}
  }
  return(
        <div className="row"> {body} </div>

      )

        }


      }
    });

module.exports = Newspage;
