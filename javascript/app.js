jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});
        
        // look for concert dates


        let artistChoice = "drake";

        var queryURL = "https://app.ticketmaster.com/discovery/v2/events?&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&sort=date,asc&keyword=" + artistChoice;

        //response call for concert events
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response){
          console.log(response)
          //date of concert
          console.log(response._embedded.events[0].dates.start.localDate);
          var concertDate = response._embedded.events[0].dates.start.localDate;
          console.log(moment(concertDate).format("MMMM Do YYYY")); 

          //time of concert?
          console.log(response._embedded.events[0].dates.start.localTime);
          var concertTime = response._embedded.events[0].dates.start.localTime;
          console.log(moment(concertTime, 'HH:mm').format('hh:mm a'));

          //name of concert/tour
          console.log(response._embedded.events[0].name);
          // venue of concert
          console.log(response._embedded.events[0]._embedded.venues[0].name);
          // url to order tickets
          console.log(response._embedded.events[0].url);
           
          console.log("------------------------------") 
          console.log("------------------------------")

          console.log(response._embedded.events)
          var concertEvent = response._embedded.events;
          concertEvent.length -= 15;
          for (var i = 0; i < concertEvent.length; i++) {
            //multiple ticket order links [5x]
            console.log(concertEvent[i].url);
            
          };

          
        });


          // search lyrics of song by artist name and track name
        let artistEntry = "coldplay";
        let trackEntry = "paradise";

        var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=049c017588dad9f5ab47ce0186fc9eb1&q_artist=" + artistEntry + "&q_track=" + trackEntry
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){

            let jObj = JSON.parse(response)
            console.log(jObj.message.body.lyrics.lyrics_body)
          })



// use this to get full lyrics for song of chosen artist

let artistQuery = "drake";
let songChoice = "passionfruit"

        var settings = {
"async": true,
"crossDomain": true,
"url": "https://genius.p.rapidapi.com/search?q=" + artistQuery + songChoice,
"method": "GET",
"headers": {
  "x-rapidapi-host": "genius.p.rapidapi.com",
  "x-rapidapi-key": "25c7168f00msh6ba6c1545772e28p12c1a8jsn1d7782288e43"
}
}

$.ajax(settings).done(function (response) {
console.log(response.response.hits[0].result.url);


});