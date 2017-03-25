// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // This is to create an XMLHttpRequest object

xhr.onload = function() {                       // When reponse has loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // if server statis was ok
    document.getElementById('content').innerHTML = xhr.responseText; // update
  }
};

xhr.open('GET', 'data/data.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request
