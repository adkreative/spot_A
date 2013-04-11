// ADKREATIVE MOBILE CODE

//FUNCTIONS ===========================================
//clear content
clearContent =function(){
	content1.innerHTML = '';
	content2.innerHTML = '';
	content3.innerHTML = '';
	//content4.innerHTML = ''; //keep form data
	content4.style.height = 0 + 'px'; content4.style.overflow = 'hidden';
	
		butt1.style.backgroundImage="url(images/mobile_butt.png)";
			butt2.style.backgroundImage="url(images/mobile_butt.png)";
				butt3.style.backgroundImage="url(images/mobile_butt.png)";
					butt4.style.backgroundImage="url(images/mobile_butt.png)";
	}

//clear sub conent======================
//======================================
clearScontent = function(){
	for(i=1;i<=12;i++){
	//window['scontent'+i].innerHTML = '';<br>
document.getElementById(['scontent'+i]).innerHTML = '';
document.getElementById(['sbutt'+i]).style.backgroundImage="url(images/mobile_sbutt.png)";
	}
}	

//fill content =======================================================================
fillProfile = function(){
	clearContent();
	content1.innerHTML = profile;
	butt1.style.backgroundImage="url(images/mobile_butt_select.png)";
	butt1.scrollIntoView(true); 
	}
fillServices = function(){
	clearContent();
	content2.innerHTML ="<br><hr class='edgeA'>" + servicesButt + "<hr class='edgeB'><br>";
	//content2.innerHTML = servicesButt;
	clearScontent();
		butt2.style.backgroundImage="url(images/mobile_butt_select.png)";
		butt2.scrollIntoView(true);
	}
fillPortfolio = function(){
	clearContent();
	content3.innerHTML = "<br><hr class='edgeA'>" + myportfolio + "<hr class='edgeB'><br>";
		butt3.style.backgroundImage="url(images/mobile_butt_select.png)";
		butt3.scrollIntoView(true);
	}
fillGreeting = function(){
	clearContent();
	content4.style.height = 'auto';
	if(loadform==1){ content4.innerHTML = "<br><hr class='edgeA'>" + myform + "<hr class='edgeB'><br>"; loadform++; }
	
	
		butt4.style.backgroundImage="url(images/mobile_butt_select.png)";
		butt4.scrollIntoView(true);
	}

//butotn on click==================================
clk = function(what){
	//open but close if already open
	if(who == what){clearContent(); who =0; brand.scrollIntoView(true); } else{
	who = what;
	if(what == 0){clearContent();}
	if(what == 1){fillProfile();}
	if(what == 2){fillServices();}
	if(what == 3){fillPortfolio();}
	if(what == 4){fillGreeting();}
	}
}

//service buttons========================================
sclk = function(swhat){
	//open but close if already open
	if(swho == swhat){clearScontent(); swho =0; butt2.scrollIntoView(true);} else{
	swho = swhat;
	clearScontent();
	content = window['service' + swhat];
	//window['scontent'+what].innerHTML = '<br><hr>' + content + '<hr><br>';
	document.getElementById(['scontent'+swhat]).innerHTML = "<br><hr class='edgeA'>" + content + "<hr class='edgeB'><br>";
	//window['sbutt'+what].style.backgroundImage="url(images/mobile_sbutt_select.png)";
	document.getElementById(['sbutt'+swhat]).style.backgroundImage="url(images/mobile_sbutt_select.png)";
	//window['sbutt' + swhat].scrollIntoView(true);
	document.getElementById(['sbutt'+swhat]).scrollIntoView(true);
	
	}
}	

//PORTFOLIO CODE ========================================
//BUILD PORTFOLIIO PAGES
mycat = 1;
myitem = 1;
catup='false';
//--------------------------------------------------
portPlug = function(){
//--------------------------------------------------
pview = "<img src = 'images/mp_"+ mycat +"_"+ myitem +".jpg' />";
//alert(pview);
if(infoUP=='true'){pinfotxt = window['pi_' + mycat +"_"+ myitem];}else{ pinfotxt="";}

pcategory = window['catnm' + mycat];
catbg();//renderDigi();
//
plccat = "<span class='textnormal'><ul class='serv'><li><b>CATEGORY : " + pcategory + "</b></li></ul><hr class='lte'/></span>";
pimage = "<div id='pimg'>"+ pview +"</div><hr class='lte'/>";
if(pinfotxt == ""){pinfo ="";}
else{pinfo = "<div id='pnfo'>" + pinfotxt + "</div>";}
dDIGI="<div style='position:absolute; height:300px; background:#f69;'>"; eDIGI="</div>";
pcatDIGI = dDIGI + pcatDIGI + eDIGI;
sdiv = "<div style='height:520px; position:absolute;'>";
spacer1 = "<div style='height:70px;'></div>" ; spacer2 = "<div style='height:480px;'></div>";//expand portfolio vars
if(catup=='true'){pcat = sdiv + pcat1 + pcat2 + "</div>"; spacer = spacer2;  } else{ pcat = sdiv + pcatDIGI + pcat1 + "</div>"; spacer = spacer1; }//cat mark


//build::::::::::::::::::::::::::::::::::::::::::::: + pcat + happyend
myportfolio = plccat + pimage + pnav + pinfo + pcat + spacer; //+ pcatDIGI;
//::::::::::::::::::::::::::::::::::::::::::::::::::
//alert(catup); "<div style='background:#f69; height:auto; position:absolute;'>""</div>" pcat sandwidch


}

//========================================

renderP = function(){
	
	portPlug();//get new content
	document.getElementById('content3').innerHTML = "<br><hr class='edgeA'>" + myportfolio + "<hr class='edgeB'><br>";//render
	if(catup == 'true' && catclk == 'true'){ buttcat.scrollIntoView(true); catclk = 'false'; } else { butt3.scrollIntoView(true); }
	}

portnext = function(){
	myitem++; 
	maxi = window['pmax'+ mycat ]; 
	if(myitem > maxi){myitem=1; mycat++; catbg();  }//loop to next cat
	if(mycat > maxcat){mycat = 1; catbg(); } //loop to first cat
	renderP();//get new content
}
portprev = function(){
	myitem--; 
	
	if(myitem < 1){ mycat--; mini = window['pmax'+ mycat ]; myitem=mini; catbg();  }//loop to next cat myitem=max;
	if(mycat < 1){mycat = 12; myitem = pmax12; catbg();  } //loop to last cat
	renderP();//get new content
}

catbg = function(){
	cbg1='' ; cbg2=''; cbg3=''; cbg4=''; cbg5=''; cbg6=''; cbg7=''; cbg8=''; cbg9=''; cbg10=''; cbg11=''; cbg12='';
	window['cbg' + mycat] = "background:#ff8400;";
	renderDigi();
	renderCBG();
//	if(catup=='true'){pcat = pcat2; renderP(); }//pre-render change
	}
showcat = function(){
	if(catup == 'false'){
	catup='true';
	catclk="true";
	catbg();
	
	//renderDigi();//?
	pcat = pcat2;
	pnav = pnavB;
	renderP(); 
//	buttcat.scrollIntoView(true); 
	} else { catup = 'false'; pcat = pcat1 ; pnav = pnavA; renderP();/* butt3.scrollIntoView(true); */ }
}
hidecat = function(dacat){
	catup='false';
	
	catbg();
	//renderDigi();
	pcat = pcat1;
	mycat = dacat;
	
	myitem = 1;
	pnav = pnavA; //pbuttpar.style.height = 90 + 'px';
	renderP();
	//butt3.scrollIntoView(true);
}

pcatDIR = function(dir){
	catup='false';
	mycat = dir;
	myitem = 1;
	renderP(); 
	//butt3.scrollIntoView(true);
	}
infoUP='false';
pINFO = function(){
	//toggle
	if(infoUP == 'false'){infoUP = 'true';} else {infoUP = 'false';}
	
	renderP();
	//if(infoUP='true'){}
	
	}




//END BUILD PORFOLIO PAGES






//VARIABLES ===========================================
//=====================================================
variables = function(){
	who=0;
	what = 0;
	swho=0;
	swhat=0;
	
	var butt1 = document.getElementById('butt1');
	var butt2 = document.getElementById('butt2');
	var butt3 = document.getElementById('butt3');
	var butt4 = document.getElementById('butt4');
	var butt5 = document.getElementById('butt5');
	
//pbuttpar = document.getElementById('pbuttpar');
	
	var content1 = document.getElementById('content1');
	var content2 = document.getElementById('content2');
	var content3 = document.getElementById('content3');
	var content4 = document.getElementById('content4');
	var brand = document.getElementById('brand');
	
	//define scontent
for(i=1;i<=12;i++){ window['scontent' + i] = document.getElementById(['scontent' + i]);}


	
	butt1.style.backgroundImage="url(images/mobile_butt.png)";
	butt2.style.backgroundImage="url(images/mobile_butt.png)";
	butt3.style.backgroundImage="url(images/mobile_butt.png)";
	butt4.style.backgroundImage="url(images/mobile_butt.png)";
//	butt5.style.backgroundImage="url(images/mobile_butt.png)";
	
	//clearScontent();define sub buttons // define with call
// portfolio var;
mycat = 1;
myitem = 1;
catup = 'false';

pbuttparS = 'background:#f69;';
portPlug();
brand.scrollIntoView(true);

// end portfolio var;


} //END VARIABLES =========================
// ========================================

//ONLOAD ===========================================	
window.onload = function(){ variables();}		