// ADKREATIVE MEDIA PLAYER // YOUTUBE PLAYER JAVASCRIPT API

var params = { allowScriptAccess: "always", wmode: "opaque" };
swfobject.embedSWF(
"http://www.youtube.com/apiplayer?enablejsapi=1&version=3;list=PL14D4FA22E66D87F8&amp;hl=en_US;autoplay=0&loop=1&enablejsapi=1&playerapiid=ytplayer","ytplayer", "369", "208", "8", null, null, params);

/*http://www.youtube.com/apiplayer?enablejsapi=1&version=3*/

//ytplayer.setShuffle(true); if fist time: shuffle next play (inside play();)//works
//FUNCTIONS
play = function () { if (ytplayer) {  ytplayer.playVideo(); freshvbutts(); vbbg2="url(images/video_play_roll.png)"; 
vbbg3="url(images/video_pause.png)";vbuttout(2); vbuttout(3); vplaying = "true"; ytEcount = 0;
 } }

pause = function () { if (ytplayer) {ytplayer.pauseVideo(); freshvbutts(); vbbg3="url(images/video_pause_roll.png)"; vbuttout(2); vbuttout(3); sleeveO+=.1; vplaying = "wait"; vsleeve.style.visibility = 'visible'; ytEcount = 0; }}

//stop = function () { if (ytplayer) { ytplayer.stopVideo(); songnumber();}}

//LOAD CHROMELESS
loadNewVideo = function (id, startSeconds) {
if (ytplayer) { ytplayer.loadVideoById(id, startSeconds);}
}

prev = function(){ ytplayer.previousVideo(); /*songnumber();*/ freshvbutts(); vbbg2="url(images/video_play_roll.png)"; 
vbbg3="url(images/video_pause.png)"; vbuttout(2); vbuttout(3); vplaying = "true"; ytEcount = 0;}
next = function(){ ytplayer.nextVideo();/* songnumber();*/freshvbutts(); vbbg2="url(images/video_play_roll.png)"; 
vbbg3="url(images/video_pause.png)"; vbuttout(2); vbuttout(3); vplaying = "true"; ytEcount = 0; }

songnumber = function(){
mysong = ytplayer.getPlaylistIndex();
}

//setVolume(volume:Number)
// set this to on icon rollover
//window.onmousemove = function(){ songnumber();}

freshvbutts = function(){
vbbg1="url(images/video_last.png)";
vbbg2="url(images/video_play.png)";
vbbg3="url(images/video_pause_roll.png)";
vbbg4="url(images/video_next.png)";
}
freshvbutts();

vbbgr1="url(images/video_last_roll.png)";
vbbgr2="url(images/video_play_roll.png)";
vbbgr3="url(images/video_pause_roll.png)";
vbbgr4="url(images/video_next_roll.png)";




vbuttover = function(vhat){
	window['vbutt' + vhat] = document.getElementById(['vbutt' + vhat]);//firefox :)
	window['vbutt' + vhat].style.backgroundImage = window['vbbgr' + vhat];
	onskin();
	
}
vbuttout = function(vhat){
	window['vbutt' + vhat] = document.getElementById(['vbutt' + vhat]);//firefox :)
	window['vbutt' + vhat].style.backgroundImage = window['vbbg' + vhat];
}

onskin = function(){
	mymusic = "mouse";
	skincount = 1; // stop >100 function
	//tubeskin.style.backgroundImage = "url(images/video_chrome2.png)";
	
	//tubeskin = document.getElementById('tubeskin');//firefox :)
	tubeskin.style.visibility = "visible";
	//tubefront = document.getElementById('tubefront');//firefox
	tubefront.style.backgroundImage = "url(images/video_chrome2_front.png)";
	
	}

offskin = function(){
	mymusic = "wait";
	}
	
//PLAYER ANIMATION
//new video a
videoA = function(){

	if(mymusic == "mouse"){skincount = 1; 
	var gettH = document.getElementById('tubeskin').style.height;//ie7
	//tubeH = parseInt(tubeskin.style.height);
	tubeH = parseInt(gettH);
	if(tubeH <269){
		var calH = ((tubeH + 271)/2);  
		//tubeskin.style.height = ((tubeH + 271) / 2)+'px'; //ie7
		//tubeskin.style.height = calH + 'px';
		document.getElementById('tubeskin').style.height = calH + 'px';}
		else {
			//tubeskin.style.height = 271 + 'px'; //ie7
			document.getElementById('tubeskin').style.height = 271 + 'px';
			}
	//tubeskin.style.height = 271 + 'px'; //tubeskin.style.top = 449 + 'px';
	
	//var ytplayer = document.getElementById('ytplayer');//firefox
	var getH = document.getElementById('ytplayer').style.height;//ie7
	playerH = parseInt(getH);//playerH = parseInt(ytplayer.style.height);
	shareH = ((playerH + 208) / 2)+'px';
	if(playerH <206){
		vsleeve.style.height = shareH;
		ytplayer.style.height = shareH;
		//document.getElementById('ytplayer').style.height = shareH;//ie7
	 } else { 
	 ytplayer.style.height = 208 + 'px'; vsleeve.style.height = 208 + 'px';}
	//ytplayer.style.height = 208 + 'px';//ytplayer.style.top = 464 + 'px'; 
	//ytplayer.style.height = ((playerH + 208) / 2)+'px';
	//vsleeve.style.height = playerH + 'px';
	} else { skincount++; }
	
	if(skincount >50){ 
	var tubeskin = document.getElementById('tubeskin');//firefox
	tubeH = parseInt(tubeskin.style.height);
	if(tubeH >63){
	//tubeskin.style.height = ((tubeH + 63) / 2)+'px';
		tubeskin.style.height = (tubeH *.88) +'px';
		}
	else{tubeskin.style.height = 61 + 'px'; tubeskin.style.visibility = "hidden"; }
	//tubeskin.style.height = 61 + 'px';// tubeskin.style.top = 659 + 'px';

	var getH = document.getElementById('ytplayer').style.height;//ie7
	//playerH = parseInt(ytplayer.style.height);
	playerH = parseInt(getH);
	//shareH = ((playerH + 10) / 2)+'px';
	shareH = ( playerH *.8 )+'px';
	if(playerH >20){vsleeve.style.height = shareH; ytplayer.style.height = shareH;}
	else{
	ytplayer.style.height = 10 + 'px'; 
	//document.getElementById('ytplayer').style.height = 10 + 'px';//ie 7
	 vsleeve.style.height = 10 + 'px';
	 tubefront.style.backgroundImage = "url(images/video_chrome2_short.png)";
//	ytplayer.style.overflow = 'hidden';//firefox
	 }
	//ytplayer.style.height = 10 + 'px';
	//ytplayer.style.height = ((playerH + 10) / 2)+'px';
	//vsleeve.style.height = playerH + 'px';
	}	
	
	//sleeve
	if(vplaying == "true" && sleevecnt < 51){sleevecnt++;}
	if(sleevecnt>50 && sleeveO > 0){ 
	sleeveO *=.95;
	vsleeve.style.opacity = sleeveO;
	if(sleeveO < .02){ sleeveO =0; vsleeve.style.visibility = 'hidden';}
	}
	if(vplaying =="wait" && sleeveO < .99){ 
	sleeveO *=1.5; vsleeve.style.opacity = sleeveO;
	if(sleeveO >.92){sleeveO=1; vsleeve.style.opacity = sleeveO; sleevcnt =1; }
	}
	
	
	
//quick hit fix
//ytplayer.setShuffle(true);
	
	
}//end videoA

//fix broken tracks ---------------------
var myplayer = "";
var ytEcount = 0;
//-- listen code
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytplayer");
  ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
}
function onytplayerStateChange(newState) {
 myplayer = newState;
}
//-- error code + engine
listenapi = function(){
if(myplayer == -1){ytEcount++;}
if(ytEcount > 45){ next(); }
}
setInterval(listenapi,100); 

//end fix broken tracks -----------------