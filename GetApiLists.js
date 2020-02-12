var url = ('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=summer&api-key=MZ7AJiGIKIrgVSGsLi8BlNr7w26OOVzB')

function setup(){
  noCanvas();
  loadJSON(url,getData);
}

function getData (data) {
  var articles = data.response.docs;

for(var i=0; i< articles.length; i++){
  createElement('h1', articles[i].headline.main)
  createP(articles[i].snippet);
  createP(articles[i].web_url);
}
}
