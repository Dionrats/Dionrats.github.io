let deviceid;

$('document').ready(function() {
    'use strict';
    initSpotify();
    initTimer();

    checkSpotifySession();
    checkConnected();

    startbackgroundloop(30000);
    startSpotifySessionloop(3000000);
});

function initTimer() {
    let now = computeUnixTime(new Date());
    $('.countdown').final_countdown({
        'start': now,
        'end': computeUnixTime(friday()),
        'now': now      
    }, function() {
        let playCookie = Cookies.get('SpotifyPlaylist');
        playPlaylist(playCookie);
    });
}

function initSpotify() {
    window.onSpotifyWebPlaybackSDKReady = () => {
        console.log("Spotify initialized");
    }
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

function startbackgroundloop(timout) {
    setInterval(function() {
        loadBackground();
    }, timout);
}

function loadBackground() {
    let min = 0;
    let max = 25;
    let offSet = Math.random() * (max - min) + min;
    $.get("https://api.giphy.com/v1/gifs/search?api_key=GgBhSVxyJ0mbSMx6CZL9QHraulmyV6jU&q=cheers&limit=1&offset=" + offSet + "&rating=G&lang=nl", function(res) {
        $("#html").css("background-image", "url(" + res.data[0].images.original.url + ")");
    });
}

function startSpotifySessionloop(timout) {
    setInterval(function() {
        checkSpotifySession();
    }, timout);
}

function checkSpotifySession() {
    //get session cookie
    let spotifySession = Cookies.getJSON('spotifySession');
    
    //check if a user is logged in
    if(spotifySession == undefined)
        return; //Show loginbutton

    //check if accesstoken is valid
    if(new Date().getTime() >= spotifySession.expires_at){
        console.log("Expired Cookie found");
        refreshSpotifyTokens(spotifySession);
        return; //get new access_token
    }
    console.log("Valid Cookie found!");
    //display logged in banner...
}

function authenticateSpotify() {
    //create state cookie
    //TODO

    //create url
    let url = "https://accounts.spotify.com/authorize?" + 
        "client_id="        + "d6a5a97f07384641af0599d372d05d5a" +  
        "&redirect_uri="    + "https://vrijmibo.dionrats.nl/callback" + 
        "&scope= "          + "streaming user-read-birthdate user-read-email user-read-private user-modify-playback-state" + 
        "&response_type="   + "code" + 
        "&state="           + "hellomusic";

    //redirect to url
    window.location.replace(url);
}

function refreshSpotifyTokens(context) {
    $.ajax({
        type: "POST",
        url: "https://accounts.spotify.com/api/token",
        data: {
            grant_type: "refresh_token",
            refresh_token: context.refresh_token,
        },
        success: function(data){
            console.log("Updated Spotify Token");
            //write cookie
            writeCookies(data);
        },
        dataType: "json",
        headers: {
            "Access-Control-Allow-Headers": "*",
            Authorization: "Basic ZDZhNWE5N2YwNzM4NDY0MWFmMDU5OWQzNzJkMDVkNWE6MTQwNzBhOTA4M2YzNGRlZGI5ZjU5MzU5ZTE1ZTg0NjQ="
        }
    });
}

function logOut() {
    Cookies.remove('spotifySession'); 
    window.location.reload();
}

function writeCookies(context) {
    console.log("writing cookie");
    Cookies.set('spotifySession', {
        access_token: context.access_token, 
        refresh_token: Cookies.getJSON('spotifySession').refresh_token,
        expires_at: (new Date().getTime() +  (context.expires_in * 1000))
    }, {
        expires: 1, 
        secure: true}
    );
}

function checkConnected() {
    if(Cookies.get('spotifySession') == undefined){
        isNotConnected();
        return;
    }
    isConnected();
}

function isConnected() {
    $(".connect").addClass("hidden");
    $(".connected").removeClass("hidden");

    let cookie = Cookies.getJSON('spotifySession');
    
    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + cookie.access_token
        },
        success: function(data){
            console.log("Got account metadata");
            $('.img-circle').attr("src", data.images[0].url);
            $(".name").html(data.display_name);
        }
    });

    $.ajax({
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
            'Authorization': 'Bearer ' + cookie.access_token
        },
        success: function(data){
            console.log("Got account playlists");
            for (let i = 0; i < data.items.length; i++) {
                const playlist = data.items[i];
                $('.dropdown-menu').append('<a class="dropdown-item" onclick="selectPlaylist(\'' + data.items[i].uri + '\', \'' + data.items[i].name + '\')">' + data.items[i].name + '</a>');
            }
        }
    });
     
}

function isNotConnected() {
    $(".connected").addClass("hidden");
    $(".connect").removeClass("hidden");
}

function selectPlaylist(url, name) {
    console.log("Playlist: " + name + " selected!");
    $('#dropdownMenuLink').html(name);
    Cookies.set('SpotifyPlaylist', url);
}

function createPlayer(context) {
    const player = new Spotify.Player({
        name: 'Vrijmibo',
        getOAuthToken: cb => { cb(context.access_token); }
    });
      
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
      
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
      
    // Ready
    player.addListener('ready', ({ device_id }) => {
        deviceid = device_id;
        console.log('Ready with Device ID: ', device_id);
    });
      
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline: ', device_id);
    });
      
    // Connect to the player!
    player.connect();
}

function playPlaylist(uri) {
    let cookie = Cookies.getJSON('spotifySession');
    createPlayer(cookie);
    

    $.ajax({
        type: "PUT",
        url: 'https://api.spotify.com/v1/me/player/play?device_id=' + deviceid,
        headers: {
            'Authorization': 'Bearer ' + cookie.access_token
        },
        data: {
            "context_uri": uri,
        },
        success: function(data){
            console.log("Let the borrel commence...");
        }
    });
    
}