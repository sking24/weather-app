// Spokane
      
      // Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: '99037',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
      html += '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<h2 class="currently">'+weather.currently+'</h2>';
      html += '<h2>'+weather.alt.temp+'&deg;F</h2>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#spokane").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


// Seattle
// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Seattle',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
      html += '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<h2 class="currently">'+weather.currently+'</h2>';
      html += '<h2>'+weather.alt.temp+'&deg;F</h2>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#seattle").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);    
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};