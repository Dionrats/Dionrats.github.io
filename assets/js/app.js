$('document').ready(function() {
    'use strict';
    initTimer();
    checkSpotifySession();
    setInterval(function() {
        loadBackground();
    }, 60000);
});

function initTimer() {
    let now = computeUnixTime(new Date());
    $('.countdown').final_countdown({
        'start': now,
        'end': computeUnixTime(friday()),
        'now': now      
    });
}

function computeUnixTime(date) {
    return Math.round(date.getTime()/1000);
}

 function friday() {
    var dayOfWeek = 5;
    var date = new Date();
    date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
    date.setHours(16);
    date.setMinutes(0);
    date.setSeconds(0);

    return date;
}

function loadBackground() {
    let min = 0;
    let max = 25;
    let offSet = Math.random() * (max - min) + min;
    $.get("https://api.giphy.com/v1/gifs/search?api_key=GgBhSVxyJ0mbSMx6CZL9QHraulmyV6jU&q=cheers&limit=1&offset=" + offSet + "&rating=G&lang=nl", function(res) {
        $("#html").css("background-image", "url(" + res.data[0].images.original.url + ")");
    });
}

function checkSpotifySession() {
    //check sessionCookie
        //if oke:
            //display playlist options
                //todo
            //display logout option
                //if clicked
                    //delete sessionCookie
                    //refresh page
        //if not-oke:
            //display connect option
    
    //check if a user is logged in
    if(Cookie.get('spotifySession') == undefined)
        return; //Show loginbutton

    //get session cookie
    let spotifySession = Cookie.get('spotifySession');

    //check if accesstoken is valid
    if(new Date().getTime() >= spotifySession.expires_at)
        return; //get new access_token
    
    
    

}

function playMusic() {
    console.log("Starting Music");

    // window.onSpotifyWebPlaybackSDKReady = () => {
    //     const token = 'BQDT6dEYwDFYoLqL9LA0Hv4zP6cgCqzriRtt0lLY-OQswpF7O_i0f4Cdyej310Y20EF82XFe67xy7M5ihZvxohWNUM9gRd20UpQKFQjtDHAY85MrZgVMixKjBEyoqpZwiUuT_x4wgzM6CxUx5WuNlHiKytl7BOEG9oLEwDTR';
    //     const player = new Spotify.Player({
    //       name: 'Web Playback SDK Quick Start Player',
    //       getOAuthToken: cb => { cb(token); }
    //     });
      
    //     // Error handling
    //     player.addListener('initialization_error', ({ message }) => { console.error(message); });
    //     player.addListener('authentication_error', ({ message }) => { console.error(message); });
    //     player.addListener('account_error', ({ message }) => { console.error(message); });
    //     player.addListener('playback_error', ({ message }) => { console.error(message); });
      
    //     // Playback status updates
    //     player.addListener('player_state_changed', state => { console.log(state); });
      
    //     // Ready
    //     player.addListener('ready', ({ device_id }) => {
    //       console.log('Ready with Device ID', device_id);
    //     });
      
    //     // Not Ready
    //     player.addListener('not_ready', ({ device_id }) => {
    //       console.log('Device ID has gone offline', device_id);
    //     });
      
    //     // Connect to the player!
    //     player.connect();
    // //   };
      
}

function authenticateSpotify() {
    //create state cookie
    //TODO

    //create url
    let url = "https://accounts.spotify.com/authorize?" + 
        "client_id="        + "d6a5a97f07384641af0599d372d05d5a" +  
        "&redirect_uri="    + "https://vrijmibo.dionrats.nl/callback" + 
        "&scope= "          + "streaming user-read-birthdate user-read-email user-read-private" + 
        "&response_type="   + "code" + 
        "&state="           + "hellomusic";

    //redirect to url
    window.location.replace(url);
}