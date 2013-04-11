//
// ======================================= RAE CODE
// ================================================

//:::::::::::BEHOLD THIS AMAZING CODE::::::::::::::

inifade = function(){
	//null
	introfade.style.opacity = introfx;
	introfx*=.5;
//
	if(introfx <.02){
	intfade="done";//true inifade();
	introfade.style.visibility = 'hidden';
	
	}
	
	
	}

fclosex = function(){ formalpha = 1; closef = "true"; }
//submission.style.visibility = 'hidden';
//fpanel.style.visibility = 'hidden';
//fclose.style.visibility = 'hidden';




closeform = function(){
	//animation, formalpha = 1;
	formalpha*= .8;
	
	mailformi.style.opacity = formalpha;
	fpanel.style.opacity = formalpha;
	fclose.style.opacity = formalpha;
	//
	if(formalpha < .03){closef = "chill"; 
	fclose.style.visibility = 'hidden';
	mailformi.style.visibility = 'hidden';
	fpanel.style.visibility = 'hidden';
	
	myform = "reset";
	mailformi.innerHTML=""; 
	mailformi.innerHTML= iframeform; //refresh form on finish & close
	
	}
	
}

//portfolio: view info
infobutt = function(inout){
	ifadein = .1;
	ifadeout = 1;
	if(inout == "in"){/*rollover*/ ipanel.style.visibility='visible'; ipanel.style.opacity = .1; portfolio.style.opacity = 1;
	igettext = pi_start + mytalk + pi_end;
	ipanel.innerHTML = igettext; viewinfo.style.backgroundImage="url('images/view_info_butt_roll.jpg')";
	} /*viewinfo.innerHTML="<img src='images/view_info_butt_roll.jpg'/>"; viewinfo.innerHTML="<img src='images/view_info_butt.jpg'/>"; */
	if(inout == "out"){ viewinfo.style.backgroundImage="url('images/view_info_butt.jpg')";} /*rollout ipanel.style.visibility='hidden'; portfolio.style.opacity = .1;*/
	ianiwhat = inout;
	ipaneli = .1
	ipanelo = 1;
	}
infoani = function(){
	
	//ipanelo = parseInt(ipanel.style.opacity);
	if(ianiwhat == "in"){
	if(ipaneli<1){ipaneli*=1.2;}
	if(ipaneli >= 1){ ianiwhat = "null"; ipaneli = 1;}//close animation
	ipanel.style.opacity = ipaneli;
	
	if(ipanelo > .1){ipanelo*=.8;}
	portfolio.style.opacity = ipanelo;
	}
	
	if(ianiwhat == "out"){
	if(ipanelo>.05){ipanelo*=.8}
	ipanel.style.opacity = ipanelo;
	
	if(ipaneli < 1){ipaneli*=1.2;}
	if(ipaneli >= 1){ ianiwhat = "null"; ipaneli = 1; ipanel.style.visibility = 'hidden';}//close animation
	portfolio.style.opacity = ipaneli;
	
	}
	


	
//set back to null when done testing...
	}//end ifnoani function
	
	//if(ianiwhat = "out"){}
	
	//}

// PORTFOLIO TAB BUTTONS ========================
//new div functions
pbtclk = function(pnum){
	mypdata = "<img src='images/p_"+ tab + "_"+ pnum + ".jpg'/>";
	mytalk= window['pi_'+tab+'_'+ pnum ];
	if(tab == 8){ loadbanner(pnum);}// load flash banner
	portfolio.innerHTML = mypdata;
	window['pbt'+oldpnum]= document.getElementById(['pbt'+oldpnum]);//ie7
	window['pbt'+oldpnum].style.backgroundImage = "url(images/pbt_mark.png)"; //last clicked is old
	window['pbtbg'+oldpnum] = "url(images/pbt_mark.png)";
	
	window['pbt'+pnum].style.backgroundImage = 'url(images/pbt_hit.jpg)'; //new click is orange
	window['pbtbg'+pnum] = "url(images/pbt_hit.jpg)";
	oldpnum = pnum; //new click is next old
	}
pbtroll = function(pnum){
	window['pbt'+pnum]= document.getElementById(['pbt'+pnum]);//firefox
	window['pbt'+pnum].style.backgroundImage = 'url(images/pbt_over.jpg)';
	}
pbtout = function(pnum){
	window['pbt'+pnum]= document.getElementById(['pbt'+pnum]);//firefox
window['pbt'+pnum].style.backgroundImage = window['pbtbg'+pnum]; //return to self
	}
	
//end new div functions
pchange = function(pnum){
	/*pdata1_1 = "NEW PORTFOLIO ITEM 1"; etc*/
	
 mytalk= window['pi_'+tab+'_'+ pnum ];
	mypdata = "<img src='images/p_"+ tab + "_"+ pnum + ".jpg'/>";

// test flash banner
	if(tab == 8){ loadbanner(pnum);}
// end test flash banner

	portfolio.innerHTML = mypdata;
	
//pnum = pnum;
//	if(goload > 1){whatserv = "new"; bringserv();}
//use trend, define line 1 and loop the rest
	if( goload ==1){
		//define button one
	//	morelinksone ="<p class='lilspace'><a id='b1' class='pactivechild' href='javascript:pchange(1);'>1</a>&nbsp;";
	//	morelinks="";
		morelinks2="";
		//loop other buttons
		//var pbutts = 8; get this var per tab!
		pb=2;
		for(p=2; p<=pbutts; p++ ){
		if(p<10){
			//morelinks = morelinks + "<a class='pactive' id='b" + p + "'  href='javascript:pchange("+ p + ");'>" + p + "</a>&nbsp;";
			morelinks2 = morelinks2 + "<td><div id='pbt" + p + "' class='pbt' onclick='pbtclk("+ p + ");' onmouseover='pbtroll("+ p + ");' onmouseout='pbtout("+ p + ");'>" + p + "</div></td>";
			}
		if(p>=10){
			//morelinks = morelinks + "<a class='pactive10' id='b" + p + "'  href='javascript:pchange("+ p + ");'>" + p + "</a>&nbsp;";
			morelinks2 = morelinks2 + "<td><div id='pbt" + p + "' class='pbt10' onclick='pbtclk("+ p + ");' onmouseover='pbtroll("+ p + ");' onmouseout='pbtout("+ p + ");'>" + p + "</div></td>";
		}
			
			} // end loop;
		//morelinks= morelinks + "</p>"; //close paragraph
		//pbuttons.innerHTML = morelinksone + morelinks; //DEFINE HTML
		
		//build div buttons for replacement
		table1 = "<table border='0' cellpadding='0' cellspacing='1'><tr>";
		morelinksone2="<td><div id='pbt1' class='pbt' onclick='pbtclk(1);' onmouseover='pbtroll(1);' onmouseout='pbtout(1);'>1</div></td>";
		//morelinks2="<td><div id='pbt2' class='pbt' onclick='pbtclk(2);' onmouseover='pbtroll(2);' onmouseout='pbtout(2);'>2</div></td>";
		table2 = "</tr></table>";
		pbuttons.innerHTML = table1 + morelinksone2 + morelinks2 + table2;
		//pbuttons2.innerHTML = morelinksone2; //DEFINE HTML
		//end build dive buttons for replacement
	//define bg color
	//pbtbg1 ='#ff8400'; pbt1.style.background = "#ff8400";
	
	pbtbg1 = "url(images/pbt_hit.jpg)"; pbt1.style.backgroundImage = pbtbg1;
	for(p=2; p<=pbutts; p++ ){
		
		window['pbtbg'+p] = "url(images/pbt_up.jpg)";
		}
	oldpnum = 1;
		
		
	
	
	goload++; //count only once per tab
	//b1.focus();//select button 1;
	} //end init buttons
	
	//window['b' + pnum].focus();
	//showdata.innerHTML = mypdata;
}//end pchange function

setpbuttons = function(){
	tab= smark;
	goload= 1;
	
	tabb1=15; 
	tabb2=9; 
	tabb3=9;
	tabb4=6;
	tabb5=4;
	tabb6=4;
	tabb7=4;
	tabb8=7;
	tabb9=10;
	tabb10=5;
	tabb11=1;
	tabb12=15;
	
	pbutts = window['tabb'+smark];
	pchange(1);
	}
// END PORTFOLIO TAB BUTTONS ========================


//label buttons:::: service & portfolio
labelService = function(){
	sbutt1.innerHTML="<span class ='servicestyle'>WEB DEVELOPMENT</span>";
	sbutt2.innerHTML="<span class ='servicestyle'>CUSTOM APPLICATIONS</span>";
	sbutt3.innerHTML="<span class ='servicestyle'>E-COMMERCE</span>";
	sbutt4.innerHTML="<span class ='servicestyle'>MOBILE APPS</span>";
	sbutt5.innerHTML="<span class ='servicestyle'>ONLINE GAMES</span>";
	sbutt6.innerHTML="<span class ='servicestyle'>WEB MARKETING</span>";
	sbutt7.innerHTML="<span class ='servicestyle'>PHP DATABASE</span>";
	sbutt8.innerHTML="<span class ='servicestyle'>CUSTOM GRAPHICS</span>";
	sbutt9.innerHTML="<span class ='servicestyle'>LOGO DESIGN</span>";
	sbutt10.innerHTML="<span class ='servicestyle'>ANIMATION</span>";
	sbutt11.innerHTML="<span class ='servicestyle'>BANNER CAMPAIGNS</span>";
	sbutt12.innerHTML="<span class ='servicestyle'>MEDIA KIT & PRINTING</span>";
	}
labelPort = function(){
	sbutt1.innerHTML="<span class ='servicestyle'>ONLINE GAMES</span>";
	sbutt2.innerHTML="<span class ='servicestyle'>DIRECT MARKETING</span>";
	sbutt3.innerHTML="<span class ='servicestyle'>LEAD GENERATION</span>";
	sbutt4.innerHTML="<span class ='servicestyle'>E-COMMERCE</span>";
	sbutt5.innerHTML="<span class ='servicestyle'>MFG CATALOG</span>";
	sbutt6.innerHTML="<span class ='servicestyle'>AD AGENCY</span>";
	sbutt7.innerHTML="<span class ='servicestyle'>TRAFFIC NETWORKS</span>";
	sbutt8.innerHTML="<span class ='servicestyle'>INTERACTIVE BANNERS</span>";
	sbutt9.innerHTML="<span class ='servicestyle'>EMAIL PUBLISHERS</span>";
	sbutt10.innerHTML="<span class ='servicestyle'>SOFTWARE</span>";
	sbutt11.innerHTML="<span class ='servicestyle'>MOBILE</span>";
	sbutt12.innerHTML="<span class ='servicestyle'>GRAPHIC ART</span>";
	
	}

//end label buttons service & portfoio


//fade in/out service text------------------------------
service = function(what){
	
	servcrank = .8;
	servalpha = 1;
	whatserv="new";
	servwho = what;
	
	oldbutt = smark;
	smark = what;
	window['sbutt' + what].style.backgroundImage ="url(images/service_button_mark.png)";
	if(oldbutt != smark){ window['sbutt' + oldbutt].style.backgroundImage ="url(images/service_button.png)"; }
	
	//txtbox2.style.opacity = .3
	//txtbox2.innerHTML = window['service'+what];
//txtbox2.innerHTML = ser
	
	} //end service function
	
//animate service
bringserv = function(){
	
	servalpha*=servcrank;
	//fade out
if(servalpha< .01 ){servcrank = 1.2; servalpha = .02; 
	//snap content++++++++++++++++++++
	//if service page do this{
	if(whereami == 2){
	txtbox2.innerHTML = window['service'+servwho]; 
	srvImage.innerHTML = window['servi'+servwho];
	}
	 //if portfolio do this{}
	  if(whereami == 3){/*portfolio*/
	setpbuttons();  
	  mypdata = "<img src='images/p_"+ tab + "_"+ pnum + ".jpg'/>";
	  if(tab == 8){loadbanner(pnum) }
	  
	portfolio.innerHTML = mypdata; }
	
}
	
	 
	
	/* if(goload == 1;){}
	 else {mypdata = "<img src='images/p_"+ tab + "_"+ pnum + ".jpg'/>";
	portfolio.innerHTML = mypdata;}*/
	 
	// }
	// }
	
	
	//fade in++++++++++++++++++++++++
if(servcrank == 1.2 && servalpha >= 1){ servalpha = 1; servcrank = 1; whatserv = "null";}
	//if service dothis{
		if(whereami == 2){
	txtbox2.style.opacity = servalpha;
	srvImage.style.opacity = servalpha;
		}
		if(whereami == 3){/*portfolio*/
		
		portpanel.style.opacity = servalpha;
		portfolio.style.opacity = servalpha;
		pbuttons.style.opacity = servalpha;
		viewinfo.style.opacity = servalpha;
		
		
		}
	//if portfolio do this{}
	//if(whatserv== "null"){}
}
//end in/out service text------------------------------
//create similar for srv images
servicei = function(what){}
//animate srv images
bringservi = function(){}
//servi1
//SERVICE BUTTONS ANIMATION
	//==================================================================================
	// SERVICE ROLLOVER ANIMATION
	//==================================================================================
	
	
	servRoll = function(){

	sbw1=parseInt(sbutt1.style.width);
	
	if(sb1 == "on"){ if( sbw1<200){ sw1=sbw1*1.03; sbutt1.style.width = sw1 + 'px'; }}
	if(sb1 == "off" && smark != 1){ if(sbw1>182){sw1=sbw1*.99; sbutt1.style.width = sw1 + 'px';} 
	//haircut
	if(sw1<185){sw1 =182; sbutt1.style.width = sw1 + 'px'; }}
	
	//keep 1 and loop 2-12;
	for(s=2;s<=12;s++){
	window['sbw'+s]=parseInt(document.getElementById(['sbutt'+s]).style.width);
	if(window['sb'+s] == "on"){ if( window['sbw'+s]<200){ window['sw'+s]= window['sbw'+s]*1.03; document.getElementById(['sbutt'+s]).style.width = window['sw'+s] + 'px';  }}
if(window['sb'+s] == "off" && smark != s){ 	if(window['sbw'+s] > 182){window['sw'+s]= window['sbw'+s]*.99; document.getElementById(['sbutt'+s]).style.width = window['sw'+s] + 'px';}
	//haircut
	if(window['sw'+s]<185){window['sw'+s] =182; document.getElementById(['sbutt'+s]).style.width = window['sw'+s] + 'px'; }}
	}
	
	
	//accept toggle switch and present variable to animation:::::::::::::::::::::::::::::
	svtogg = function(sbN,onoff){
	window['sb'+sbN]=onoff;
	if(onoff=='off' && smark!=sbN){window['sbw'+sbN]=200; window['sbutt'+sbN].style.backgroundImage="url(images/service_button.png)";}
	if(onoff == 'on' && smark!=sbN){window['sbutt'+sbN].style.backgroundImage="url(images/service_button_roll.png)";}
	//200 was 205; 
	}
	
}
//===================================================================================



//:::::::::::BLANKET FUNCTION
showblanket = function(){
	//fadein
	if(bstat == "out"){bfade-=bcrank;  
	if(bfade<0){bstat = "null"; bfade = 0; bcount=1; blanket.style.visibility="hidden"; }}
	//fadeout
	if(bstat == "in"){blanket.style.visibility="visible"; bfade+=bcrank;
	if(bfade>1){bstat="count"; bfade=1.1; snap(who); }}
	
	//***create function swap content//
	//delay
	if(bstat == "count"){bcount++;
	if(bcount>32){bstat="out"; bcount=1;}}
	
	blanket.style.opacity=bfade;
	}
//:::::::::::END BLANKET FUNCTION

//:::::::::HED IMAGE FADE FUNCTIONS	
hedchange = function(what){ who= what; fizz= .8;}

fadein = function(){
	
hedimg.style.opacity = myfade;
if(fizz !=1){myfade *= fizz;}
if(myfade > 1){fizz = 1; myfade = 1;}
if(myfade<.03){fizz = 1; myfade = .05; swap(); fizz = 1.2;}
}

swap = function(){ imgA= window['img'+ who]; hedimg.innerHTML= imgA; }
//:::::::::END HED FADE FUNCTIONS

//:::::::CHANGE CONTENT FUNCTION ----------------------------------------------------------------------------
hidestuff = function(){
	txtbox.style.visibility = 'hidden';
	txtbox2.style.visibility = 'hidden';
	srvImage.style.visibility = 'hidden';
	servicebutt.style.visibility = 'hidden';
	portfolio.style.visibility = 'hidden';
	portpanel.style.visibility = 'hidden';
	pbuttons.style.visibility = 'hidden';
	viewinfo.style.visibility = 'hidden';
	ipanel.style.visibility = 'hidden';
	fpanel.style.visibility = 'hidden';
	ealert.style.visibility = 'hidden';
	mailformi.style.visibility = 'hidden';
	//submission.style.visibility = 'hidden';
	fclose.style.visibility = 'hidden';
	//txtbox.innerHTML = profiletxt;
	txtbox.innerHTML = profiletxt + quickbio;
	
	
	
	}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
snap = function(what){
	hidestuff();
	whereami=what;
	//alert(what);
	if(what == 1){/*txtbox.style.visibility= 'visible'; works */ layer1.innerHTML="<img src='images/kreative_profile_bg_sm.jpg' />"; txtbox.innerHTML = profiletxt + quickbio;
	layer1.style.visibility='visible'; }
	if(what == 2){/*show2*/ labelService();  servicebutt.style.visibility='visible'; layer1.innerHTML="<img src='images/kreative_service_bg.jpg' />";  /*smark=1; */ service(1); sbutt1.style.width = 200 + 'px';
	txtbox2.innerHTML = service1; //window['service'+servwho]; 
	srvImage.innerHTML = servi1; //window['servi'+servwho];
	txtbox2.style.visibility = 'visible'; srvImage.style.visibility ='visible';
	}
	
	if(what == 3){/*show3*/ service(1); sbutt1.style.width = 200 + 'px'; layer1.innerHTML="<img src='images/kreative_portfolio_bg.jpg' />"; labelPort(); servicebutt.style.visibility='visible';
	portfolio.style.visibility= 'visible'; /*portfolio.innerHTML = "<img src = 'images/p_12_1.jpg'/>"; */
	portpanel.style.visibility= 'visible'; /*tab buttons*/goload = 1; pbuttons.style.visibility = 'visible'; tab=1; /*pbutts = 3;*/ pchange(1);
	/*view info*/ viewinfo.style.visibility = 'visible';
	
	}
	if(what == 4){
		layer1.innerHTML="<img src='images/kreative_contact_bg.jpg' />"; layer1.style.visibility='visible'; fpanel.style.visibility = 'visible'; mailformi.style.opacity = 1; mailformi.style.visibility = 'visible'; fclose.style.opacity = 1;
		//mailformi.innerHTML= iframeform; 
		//document.getElementById('iform').contentWindow.submission.style.visibility = 'hidden';
		
		formalpha = 1; fpanel.style.opacity = 1;
		/*if(myform != "reset"){myform = "<?php echo $myform; ?>";}*/
		if(myform == 'complete'){ ealert.style.visibility = 'hidden'; fclose.style.opacity = 1; fclose.style.visibility = 'visible'; }
		else{ ealert.style.visibility = 'visible';}
		// document.getElementById('iform').contentWindow.submission.style.visibility = 'hidden';
		//	document.getElementById('iform').contentWindow.mailform.style.visibility = 'visible';
		/*submission.style.visibility = 'visible';*/ /*mailformi.style.visibility = 'hidden'; */
		//mailformi.style.visibility = 'visible';
	}
		
//	style.backgroundImage="url('img_tree.png')";
	//layer1.style.backgroundImage= "url('images/kreative_service_bg.jpg')"; <img src="images/kreative_profile_bg.jpg" />
	
}//end snap function

//:::END CHANGE CONTENT FUNCTION

//main menu rollovers
buttroll = function(what){

	if(what == 1){ bprofile.style.backgroundImage="url('images/roll_a.jpg')"; }
	if(what == "1out"){ bprofile.style.backgroundImage=""; }
	
	if(what == 2){ bservices.style.backgroundImage="url('images/roll_bc.jpg')"; }
	if(what == "2out"){ bservices.style.backgroundImage=""; }
	
	if(what == 3){ bportfolio.style.backgroundImage="url('images/roll_bc.jpg')"; }
	if(what == "3out"){ bportfolio.style.backgroundImage=""; }
	
	if(what == 4){ bcontact.style.backgroundImage="url('images/roll_d.jpg')"; }
	if(what == "4out"){ bcontact.style.backgroundImage=""; }

	}
//:::::::::::::BUTTON FUNCTION:::::::::::::	
button = function(what){
	//hedmark.style.marginLeft= 0 +"px";
	//document.getElementById('hedmark').style.marginLeft = 0+'px';
	bounce = 0;
	imat = parseInt(hedmark.style.marginLeft);
	//if(imat > markc && what!= 4){ hedmark.style.backgroundImage="url('images/hed_mark.gif')";}
	if(what!= 4){ hedmark.style.backgroundImage="url('images/hed_mark.gif')";}
	
	if(what == 1){hground = marka;}
	if(what == 2){hground = markb;}
	if(what == 3){hground = markc;}
	if(what == 4){hground = markd; hedmark.style.backgroundImage="url('images/mark_d.png')";}
	
	if(imat > hground){hgravity = -1.2;} 
	if(imat < hground){hgravity = 1.2;}
	if(imat == hground){hgravity = 0;}
	
	hedchange(what);
	//TELL BLANKET
	if(bcount == -1){bstat = "out";} else{bstat = "in";}
	//alert(hgravity);

	}
//:::::::::HED MARK ANIMATION FUNCTION
markani = function(){
	//hedmark = document.getElementById('hedmark');
	hedL = document.getElementById('hedmark').style.marginLeft;
	//where = parseInt(hedmark.style.marginLeft);//firefox
	where = parseInt(hedL);
	
	quest = where+ hspeed;
	if(hgravity > 0 || hgravity < 0){ 
	hedmark.style.marginLeft= quest+ "px";

	if(where <= hground && hgravity < 0){ 
	if(bounce<2){ hedmark.style.marginLeft= (where-hspeed)+'px'; hspeed*= -1; hspeed*= damper; bounce++; } 
	else {hgravity = 0; hspeed = 0; hedmark.style.marginLeft = hground+ 'px'; }
	}//go to mark //hgravity = 0; 
	if(where >= hground && hgravity > 0){
		if(bounce<2){ hedmark.style.marginLeft= (where-hspeed)+'px'; hspeed *= -1; hspeed*= damper; bounce++; }
		else {hgravity = 0; hspeed = 0; hedmark.style.marginLeft = hground+ 'px'; }
		}//go to mark  hgravity = 0;
}
	hspeed+=hgravity;

}
//::::::::: END HED MARK ANIMATION FUNCTION

//::::::::: GROW HED MARK
growmark = function(){
	//gmsize*=gmcrank;
	gmsize = (gmsize + 176)*.5;
	if(gmsize>176){gmsize=176;}
	hedmark.style.width = gmsize + 'px';
	
	}
//::::::::: END GROW HED MARK	

//:::::::::::ANIMATION::::::::::::::==================================================================	
animation = function(){
	
	 fadein();
	markani();
	if(bstat != "null"){showblanket();}
	if(gmsize<176){growmark();}
	//service buttons
	//if(serviceb==1){servicesroll(1);}
	//if(serviceb == -1){serviceoff(1);}
	
	
	if(whereami==2 || whereami==3){servRoll(); }
	if(whatserv == "new") { bringserv();} 
	
	if(ianiwhat != 'null'){infoani();}
	
	if(whereami==4){
		if(myform == "complete" && closef == "true"){
		closeform();
		}
	}
	
	videoA();
	//music 404 fix // chromeless now :)
	//if(pzcount == "true"){pz+=1;}
	//if(pz == 100 ){ songnumber();  if(mysong > 0){ prev(); pause(); pzcount = "false"; pz=110;} else{ pz = 1; }}
	//end music 404 fix
	
	}
//:::::::::::END ANIMATION::::::::::::::=============================================================

bang = function(){
	setInterval(animation,30);
	
	}

//=================:::::::::::DEFINE VARIABLES::::::::::::::============================================***=
variables = function(){
	whereami = 1;
	
	//yt 404 fix vars
	//pz = 1;
	//pzcount = "true";
	//mysong = 0; //:::

//universal FireFox Fix-----------------------------------
var pbt1 = document.getElementById('pbt1');//firefox
var hedimg = document.getElementById('hedimg');//firefox
var hedmark = document.getElementById('hedmark');//firefox
var tubeskin = document.getElementById('tubeskin');
var blanket = document.getElementById('blanket');
var portpanel = document.getElementById('portpanel');
var vsleeve = document.getElementById('vsleeve');
var ytplayer = document.getElementById('ytplayer');

var hedimg = document.getElementById('hedimg');
var bcontact = document.getElementById('bcontact');
var bprofile = document.getElementById('bprofile');
var bservices = document.getElementById('bservices');
var bportfolio = document.getElementById('bportfolio');

	var txtbox = document.getElementById('txtbox');
	var txtbox2 = document.getElementById('txtbox2');
	var srvImage = document.getElementById('srvImage');
	var servicebutt = document.getElementById('servicebutt');
	var portfolio = document.getElementById('portfolio');
	var portpanel = document.getElementById('portpanel');
	var pbuttons = document.getElementById('pbuttons');
	var viewinfo = document.getElementById('viewinfo');
	var ipanel = document.getElementById('ipanel');
	var fpanel = document.getElementById('fpanel');
	var ealert = document.getElementById('ealert');
	var mailformi = document.getElementById('mailformi');
	var fclose = document.getElementById('fclose');
	
var layer1 = document.getElementById('layer1');
var tubefront = document.getElementById('tubefront');

//end universal FireFox Fix--------------------------------	
	
//introfx = 1;//null
//intfade="truex";//null
var introfade = document.getElementById('introfade');
introfade.style.visibility = 'hidden';


	
	// var params = { allowScriptAccess: "always", wmode: "opaque" };

 /*   swfobject.embedSWF(
"http://www.youtube.com/v/videoseries?list=PL14D4FA22E66D87F8&amp;hl=en_US;autoplay=0&loop=1&enablejsapi=1&playerapiid=ytplayer","ytplayer", "369", "208", "8", null, null, params);*/

//sitecontent.innerHTML = mysitecontent;
	
	skincount = 1; mymusic = "wait"; //video init
	sleeveO = 1; sleevecnt =1; vplaying = "wait";//sleeve init
	
	myform = "new";// wtf
	bcount = -15; //-1 = start; wtf
	
	// service mark
	pnum = 1;
	smark = 1;
	
	//HED MARK
	bounce = 0;//INIT
	hspeed = 0;//INIT
	hgravity = 0; //or 1.2; or zero ::::::::::: toggle actually .8 and -.8 w 0;
	damper = .2;
	
	marka = -244;//margin left values for hedmark
	markb = -66;
	markc = 111;
	markd = 288;
	
	gmcrank = 1.2;
	gmsize = 1;
	
	//
	//hedmark.style.marginLeft = marka+'px';
	
	hedmark.style.marginLeft = -244 + 'px';
	hedmark.style.width = 1+'px'; //176px
	//button defined after image fade

//:::::check if from contact page

//::service & porfolio buttons div style ::::::::::::::::::::::::::::::::
pb=1;
for(pb =1; pb <=12; pb++){ 
window['sbutt'+pb] = document.getElementById(['sbutt'+pb]);//firefox :)
window['sbutt'+pb].style.cursor = 'pointer';
 }

//::service & porfolio buttons div style ::::::::::::::::::::::::::::::::
	
	
	//hedchange(whereami);
	//alert(hedmark.style.marginLeft);

//:::::::::::::::HED IMAGE FADE INIT
img1= "<img src='images/hed_graphic_profile_03.jpg' />";
img2= "<img src='images/hed_graphic_services_03.jpg' />"; 
img3= "<img src='images/hed_graphic_portfolio_03.jpg' />"; 
img4= "<img src='images/hed_graphic_contact_03.jpg' />";
img5="<img src='images/pre_profile.jpg' />";

fizz = 1.2;//grow *.8 is shrink
myfade = 1;//100%
what = 3;//null
who = 4;//null
//hedimg = document.getElementById('hedimg');
hedimg.innerHTML = img5;
hedimg.style.opacity = 1;
//:::::::::::::::::::: END HED FADE INIT

//:::::::::::::::::::::BLANKET
//blanket = document.getElementById('blanket');
blanket.style.visibility = "visible";
blanket.style.opacity = 1;
bcrank = .05;
bfade = 1;
bstat = "out";
bcount = -15; //-1 = start;
//:::::::::::::::::::::END DEFINE BLANKET

//example: url?mypage=4 ( =return from form submit . php )
//variables go downstream php to javascript ~ never up stream//
//==================php onsite=======================
//whereami = "<?php /*$mypage=$_GET['mypage'];*/ if($mypage==""){$mypage=1;} echo $mypage; ?>";
//==================php onsite=======================
	if (whereami == 4){hedmark.style.marginLeft=markd + 'px'; layer1.innerHTML="<img 		src='images/kreative_contact_bg.jpg' />";
	hedmark.style.marginLeft = markd+'px';
	hedmark.style.width = 176+'px'; //176px
	}

button(whereami);
snap(whereami);	


//::::::SERVICE BUTTONS
//DEFINE sbutt;__________________________________________________________
	for(i=1;i<=12;i++){
	window['sbutt'+i].style.width = 182 + 'px';
	window['sbutt'+i].style.height = 30 + 'px';
	window['sbutt'+i].style.top = 100+(i*32) + 'px';
	window['sbutt'+i].style.backgroundImage="url(images/service_button.png)";
}//end loop
sbutt1.style.backgroundImage="url(images/service_button_mark.png)";
sbutt1.style.width = 200 + 'px';
sb1='off';
sbw1=parseInt(sbutt1.style.width);
sw1=.1;
//repeate define for 2-10
for(i=2;i<=12;i++){
window['sb'+i]='off';
window['sbw'+i]=parseInt(document.getElementById(['sbutt'+i]).style.width);
window['sw'+i]=.1;	
}//end loop
//end define sbutt__________________________________________________________

//::::::END SERVICE BUTTONS
//txtbox2.style.opacity =.2;

//service content fade
whatserv="null";

txtbox.innerHTML = profiletxt;

pbutts = 15;// init var 

//view info stuff
ipanel.style.visibility='hidden';
viewinfo.style.visibility = 'hidden';
ianiwhat = "null";

hidestuff();

closef = "false";
myform = "notyet"; //'complete'
formalpha = 1;

	//fclose = document.getElementById('fclose');
	//submission = document.getElementById('submission');
	//fpanel = document.getElementById('fpanel');

//form submission opacity
fclose.style.opacity = 1;
//submission.style.opacity = 1;
fpanel.style.opacity = 1;
	

	
	
	
	
	}	//END VARIABLES
	

//::::::::::: INITIALIZE :::::::::::::::::::::::::
window.onload = function(){ variables(); bang(); }
//::::::::::: WORD ::::::::::::::::;;:::::::::::::