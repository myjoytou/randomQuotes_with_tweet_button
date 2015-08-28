$(document).ready(function() { 
  $('#new-quote-btn').click(function() {
    $('#qoutes-div').empty();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: update
    });
  });
  function update(response) {
    //console.log(response);
    $('#qoutes-div').append("<span class='saying'>" + response['quoteText'] +     "</span>");
    
    $('#qoutes-div').append("<br>");
    
    $('#qoutes-div').append("<span class='author'>" +                             response['quoteAuthor']+ "</span>");
    
    $('#tweet-btn iframe').remove();
    // Generate new markup
    var tweet_btn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'http://codepen.io/vlearner/')
        .attr('data-text', $('#qoutes-div').text());
    $('#tweet-btn').append(tweet_btn);
    twttr.widgets.load();
  }
});