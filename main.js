console.log("helo");


var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";


var getNewPhoto = function(data){
  $(".bg").css("background")
}
var getNewQuote = function(data){
  $(".quote-text").text(data.quoteText);
  $(".author-text").text(' - ' + data.quoteAuthor);
    var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor + ' ' ;
  if (data.quoteAuthor === ''); { 
    data.quoteAuthor = 'Unknown';
  }


  $(".twitter-share-button").attr("href", quot);

};
$(document).ready(function() {
  $.getJSON(url, getNewQuote, 'jsonp');

  $("#getNewQuote").click(function() {
  $.getJSON(url, getNewQuote, 'jsonp');
});

});


$(document).ready(function(){

});



console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);