var deviceid;

// $('document').ready(function() {
//     // 'use strict'
//     //clearListCookies();
   
// });

function init() {
    initPartyToggle();
    initToggleEvent();
    initTimer();
    initSpotify();
    
    $('.toggle').click(function(){
    	location.reload();
    })

    checkSpotifySession();
    checkConnected();

    startbackgroundloop(30000);
    startSpotifySessionloop(3000000);
}

function initPartyToggle(){
	$('party-toggle').bootstrapToggle('disable')
	if(Cookies.get('time-type') == "party"){
		$('#party-toggle').bootstrapToggle('on')
	} else {
		$('#party-toggle').bootstrapToggle('off')
	}
	$('party-toggle').bootstrapToggle('enable')
}

function initToggleEvent(){
    $('#party-toggle').change(function() {
    	if(Cookies.get('time-type') == "party"){
    		Cookies.set('time-type', 'normal');
    	} else {
    		Cookies.set('time-type', 'party');
    	}
    })
}

function clearListCookies()
{   
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {   
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
    }
    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name=cookiename;
        //alert(name);
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/acc/html";                    
    }
    window.location = ""; // TO REFRESH THE PAGE
}

function initTimer() {
	if(Cookies.get('time-type') == "party"){
		var titleText = getTitleText(getCurrentDay()) 
		$("#title").html(titleText);
	}
    var now = computeUnixTime(new Date());
    $('.countdown').final_countdown({
	        'start': now,
	        'end': computeUnixTime(friday()),
	        'now': now      
	    }
	    
	    // , function() {
	    //     // Finish Callback
	    //     console.log("Time is up!");
	    //     playPlaylist(Cookies.get('SpotifyPlaylist'));
	    // }
	);
    console.log($('.countdown'))
}

function getTitleText(day){
	switch(day){
		case 1:
			return "MAMIBO"
		case 2:
			return "DIMIBO"
		case 3:
			return "WOMIBO"
		case 4:
			return "DOMIBO"
		case 5:
			return "VRIJMIBO"
		case 6:
			return "ZAMIBO"
		case 7:
			return "ZOMIBO"
	}
}

function initSpotify() {
    window.onSpotifyWebPlaybackSDKReady = function() {
        createPlayer(Cookies.getJSON("spotifySession"));
        console.log("Spotify initialized");
    }
}

function computeUnixTime(date) {
    return Math.round(date.getTime()/1000);
}

 function friday() {
 	if(Cookies.get('time-type') == "party"){
    	var dayOfWeek = getCurrentDay();
	}else{
		var dayOfWeek = 5;
	}
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

function getCurrentDay(){
	var d = new Date();
	return d.getDay();
}

function createPlayer(context) {
    // return promise = new Promise((resolve, reject) => {
        const player = new Spotify.Player({
            name: 'Vrijmibo',
            getOAuthToken: (cb, context) => { cb(context.access_token); }
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
        // resolve(player);
    // });
}

async function playPlaylist(uri) {
    let cookie = Cookies.getJSON('spotifySession');
    $.ajax({
        type: "PUT",
        url: 'https://api.spotify.com/v1/me/player/play?device_id=' + deviceid,
        dataType: "json",
        headers: {
            'Authorization': 'Bearer ' + cookie.access_token
        },
        data: JSON.stringify({
            context_uri: uri,
            offset: {
                position: 1
            },
            position_ms: 0
        }),
        success: function(data){
            console.log("Let the borrel commence...");
        }
    }); 
}