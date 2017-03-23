var today = new Date();
var hourNow = today.getHours();
var greeting;

greeting = 'Welcome';

if(hourNow > 18){
    greeting = 'Good Evening!';

}

else if (hourNow < 12){
    greeting = 'Good Morning!';
}

else{
    greeting = 'Good Afternoon!';
}

document.write('<h3>' + greeting + '</h3>');
