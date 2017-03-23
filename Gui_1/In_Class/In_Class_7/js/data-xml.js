// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // This is to create an XMLHttpRequest object

xhr.onload = function() {              // When reponse has loaded
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             // comment here

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // loading the response http from XML into reponse html
  var events = response.getElementsByTagName('event'); // loading the response tag events into tag

  for (var i = 0; i < events.length; i++) {            // keep on doing it till no event is left
    var container, image, location, city, newline;      // creating new objects for containers and etc
    container = document.createElement('div');          // assigning new div elements into container
    container.className = 'event';                      // assigning class "event" into container event

    image = document.createElement('img');              // loadin xml img tags into html image objects
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             // Add Location data
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
// }

  function getNodeValue(obj, tag) {                   // Get content from XML
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             // prepare the request
xhr.send(null);                                     // send the request
