$(function() {
  //  $('li:contains("pine")').text('almonds');
  
  $("ul").before("<p>Updated</p>");
  
  $('li.hot').prepend('+');
  
  var $newlistitem = $('<li><em>glutrn free</em> spy sauce</li>');
  
  $('li:last').after($newlistitem);
  
  });
