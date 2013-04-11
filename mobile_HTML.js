// ADKREATIVE MOBILE CONTENT


//------------------------------
//                  form content 
//------------------------------
loadform=1;
myform = "<iframe src='mobile_i_form.php' id='iform' width='305' height='310' scrolling='no' frameborder='0' allowtransparency='true'></iframe>";
//end form data



//------------------------------
//               profile content 
//------------------------------

//static
myexperience = 13;
myage=33;
//<ruby><rb>Steven Michael Rae</rb><rt>/ ADKREATIVE PROFILE /</rt></ruby>
profiletxt="<br><hr class='edgeA'><span class='txtheavy'><div align='center'> STEVEN MICHAEL RAE <span class='txtmicro' style='letter-spacing:.1em;'><br>www.ADKREATIVE.com</span></div></span><hr class='edgeB'><br><span class='txtlight'><ul class='profile'><li><span class='txtbullets'> TITLE:</span> Web Developer</li> <hr class='lte'> <li><span class='txtbullets'> EXPERIENCE: </span>"+ myexperience +" Years Creating Websites</li><hr class='lte'> <li><span class='txtbullets'> AGE: </span>"+ myage +"</li> <hr class='lte'> <li><span class='txtbullets'> LOCATION:</span> Orange County, CA</li> <hr class='lte'> <li><span class='txtbullets'> SKILLS: </span> Design, Programming, Animation, 3D, UX, SEO, PPC </li> <br><hr class='lte'> <li><span class='txtbullets'> TECHNOLOGY: </span>PHP, HTML, CSS, JS, .PSD, .C4D, .FLA, MySQL</li> <br><hr class='lte'> <li><span class='txtbullets'> EDUCATION: </span> Irvine Valley College / Cal State Fullerton</li> <br><hr class='lte'> <li><span class='txtbullets'> AREA OF STUDY: </span> Graphic Arts / Entertainment Art & Animation</li> <br><hr class='lte'> <li><span class='txtbullets'> HOME TOWN: </span>Irvine, CA</li> <hr class='lte'> <li><span class='txtbullets'>FAVORITE PROJECT:</span> GameVance Network</li></ul></span> <hr class='lte'> ";
//padding-right:20px; line-height:18px;
quickbio="<div class='smallarial' style='width:auto; height:auto; padding:0px 5px 0px 5px; line-height:16px; text-align:justify; text-justify:inter-word;' ><font class='txtnormal_lte'>QUICK BIO: <br> </font>" + "Steven started learning how to design and code websites in 1999. He spent countless hours perfecting his craft and pushing the limits of web technologies. Steven has used his skills while working for several companies and has built an impressive ONLINE PORTFOLIO. Steven continues to develop his skills and is ready for the new media trends presented by today's Internet and Interactive Devices." 
+ "<br><hr class='lte'>Get connected with Steven Rae.<br>SEND INFO or leave a voice message.<br><hr class='lte'>"
+"<br><br><div class='closex'  onClick='clk(1);'  > <img src='images/m_close_icon.png' style='margin-top:-6px;' align='center' /></div>"
+"</div><hr class='edgeB'><br>";
//<span class='smallarial'  style='line-height:14px;  ' ></span>
profile = profiletxt + quickbio;

//------------------------------
//               service content 
//------------------------------

servicesButt ="<div class='subButton' id='sbutt1' onClick='sclk(1);'>WEB DEVELOPMENT<img src = 'images/msi_1.png' align='right' class='biconsS' ></div>"
+"<div id='scontent1' class='scontent' ></div>"
+" <div class='subButton' id='sbutt2' onClick='sclk(2);'>CUSTOM APPLICATIONS<img src = 'images/msi_2.png' align='right' class='biconsS' ></div><div id='scontent2' class='scontent' ></div>"
  +"<div class='subButton' id='sbutt3' onClick='sclk(3);'>E-COMMERCE<img src = 'images/msi_3.png' align='right' class='biconsS' ></div><div id='scontent3' class='scontent' ></div>"
  +" <div class='subButton' id='sbutt4' onClick='sclk(4);'>MOBILE APPS<img src = 'images/msi_4.png' align='right' class='biconsS' ></div><div id='scontent4' class='scontent' ></div>"
   +" <div class='subButton' id='sbutt5' onClick='sclk(5);'>ONLINE GAMES<img src = 'images/msi_5.png' align='right' class='biconsS' ></div><div id='scontent5' class='scontent' ></div>"
	+" <div class='subButton' id='sbutt6' onClick='sclk(6);'>WEB MARKETING<img src = 'images/msi_6.png' align='right' class='biconsS' ></div><div id='scontent6' class='scontent' ></div>"
	  +"<div class='subButton' id='sbutt7' onClick='sclk(7);'>PHP DATABASE<img src = 'images/msi_7.png' align='right' class='biconsS' ></div><div id='scontent7' class='scontent' ></div>"
	  +" <div class='subButton' id='sbutt8' onClick='sclk(8);'>CUSTOM GRAPHICS<img src = 'images/msi_8.png' align='right' class='biconsS' ></div><div id='scontent8' class='scontent' ></div> "
	  +" <div class='subButton' id='sbutt9' onClick='sclk(9);'>LOGO DESIGN<img src = 'images/msi_9.png' align='right' class='biconsS' ></div><div id='scontent9' class='scontent' ></div>"
	   +" <div class='subButton' id='sbutt10' onClick='sclk(10);'>ANIMATION<img src = 'images/msi_10.png' align='right' class='biconsS' ></div><div id='scontent10' class='scontent' ></div>"
		+" <div class='subButton' id='sbutt11' onClick='sclk(11);'>BANNER CAMPAIGNS<img src = 'images/msi_11.png' align='right' class='biconsS' ></div><div id='scontent11' class='scontent' ></div>"
		 +" <div class='subButton' id='sbutt12' onClick='sclk(12);'>MEDIA KIT & PRINTING<img src = 'images/msi_12.png' align='right' class='biconsS' ></div><div id='scontent12' class='scontent' ></div>";



service1="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>"+ myexperience +" Years of Web Design experience</li><hr class='lte'><li>Passion for both Design and Programming</li><hr class='lte'><li>.PSD, HTML5, CSS, JavaScript, Flash/AS</li><hr class='lte'><li>Search Engine Optimization</li><hr class='lte'><li>Effective Concept – Completion Process</li><hr class='lte'><li>Stable Cross-Browser Coding Techniques </li><hr class='lte'><li>Development with LAMP</li><hr class='lte'><li>Visitor Statistics and Customer Tracking</li></ul></span></span>"; //okay pretty good :)

service2="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Ecommerce</li><hr class='lte'><li>Direct Marketing</li><hr class='lte'><li>Point of Purchase</li><hr class='lte'><li>Toolbar</li><hr class='lte'><li>Social Networks</li><hr class='lte'><li>Content Management</li><hr class='lte'><li>Lead Generation</li><hr class='lte'><li>List Management</li><hr class='lte'><li>Tournament Games</li></ul></span></span>";

service3="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Custom Shopping Cart</li><hr class='lte'><li>Seamless Software Integration</li><hr class='lte'><li>Catalog Management Tools</li><hr class='lte'><li>Dynamic Landing Pages (Smart Pages)</li><hr class='lte'><li>Optimized User Experience</li></ul></span></span>";

service4="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Mobile Device Detection</li><hr class='lte'><li>Micro Website for Mobile browsers</li><hr class='lte'><li>Mobile Games & Applications (new)</li><hr class='lte'><li>Strong JavaScript Development</li><hr class='lte'><li>High Quality Low-Bandwith Development</li></ul></span></span>";

service5="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Flash Games</li><hr class='lte'><li>Casual Games</li><hr class='lte'><li>Tournament Games & Applications</li><hr class='lte'><li>Behavioral Games</li><hr class='lte'><li>Educational Games</li><hr class='lte'><li>Mobile Games (new)</li><hr class='lte'><li>Micro Games for Banners</li></ul></span></span>";

service6="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>SEO</li><hr class='lte'><li>PPC (GOOGLE)</li><hr class='lte'><li>e-Mail Campaigns</li><hr class='lte'><li>Banner Campaigns</li><hr class='lte'><li>Co-Registration </li><hr class='lte'><li>CPC, CPM, CPA, ECPM</li><hr class='lte'><li>EULA</li></ul></span></span>";

service7="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Seamless Front & Back Development</li><hr class='lte'><li>Custom Data Interface</li><hr class='lte'><li>Optimized Query Structure</li><hr class='lte'><li> 3rd Party Software Integration</li></ul></span></span>";

service8="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Graphic Design for Print</li><hr class='lte'><li>Graphic Design for Web / Interactive</li><hr class='lte'><li>Graphic Design for Software / GUI</li><hr class='lte'><li>Graphic Design for Games</li><hr class='lte'><li>Graphic Design for Animation / Video</li><hr class='lte'><li>3D Art, Bitmap Art & Vector Art</li></ul></span></span>";

service9="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Intelligent Icon for your Brand</li><hr class='lte'><li>Scalable Vector Artwork</li><hr class='lte'><li>Quality Look & Feel</li><hr class='lte'><li>Dynamic Color & Type Treatment</li><hr class='lte'><li>Formats for both Web & Print</li></ul></span></span>";

service10="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>2D & 3d Animation</li><hr class='lte'><li>Animation for Web</li><hr class='lte'><li>Animation for Video</li><hr class='lte'><li>Text Animation</li><hr class='lte'><li>Animated Presentations</li><hr class='lte'><li>JavaScript & CSS</li><hr class='lte'><li>Flash & ActionScript</li></ul></span></span>";

service11="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Interactive SWF</li><hr class='lte'><li>Animated .gif</li><hr class='lte'><li>Animated .swf</li><hr class='lte'><li>Static</li><hr class='lte'><li>Standard & Custom Sizes</li></ul></span></span>";

service12="<span align='justify' class='serv'><span class='txtnormal'><ul class='serv'><li>Graphic Design</li><hr class='lte'><li>Business Cards</li><hr class='lte'><li>Printed Folders</li><hr class='lte'><li>Envelopes</li><hr class='lte'><li>Letterhead</li><hr class='lte'><li>Brochures</li><hr class='lte'><li>Catalogs</li><hr class='lte'><li>Stickers</li><hr class='lte'><li>Tradeshow Booths</li></ul></span></span>" + "<br><hr class='lte'>"
+"<br><br><div class='closex'  onClick='clk(2);'  > <img src='images/m_close_icon.png' style='margin-top:-6px;' align='center' /></div>";

//------------------------------
//             portfolio content
//------------------------------
catnm1="ONLINE GAMES";
catnm2="DIRECT MARKETING";
catnm3="LEAD GENERATION";
catnm4="E-COMMERCE";
catnm5="MFG CATALOG";
catnm6="AD AGENCY";
catnm7="TRAFFIC NETWORKS";
catnm8="INTERACTIVE BANNERS";
catnm9="EMAIL PUBLISHERS";
catnm10="SOFTWARE";
catnm11="MOBILE";
catnm12="GRAPHIC ART";

cbg1 = 'background:#ff8400;';
cbg2=''; cbg3=''; cbg4=''; cbg5=''; cbg6=''; cbg7=''; cbg8=''; cbg9=''; cbg10=''; cbg11=''; cbg12='';
//mycat = 1;
//myitem = 1;
//initCBG (catbg)
//((i*23)-10)
//DIGI=======================================
renderDigi = function(){
pcatDIGI="<div style=' position:absolute; height:auto;'>";//just freacking program the darn height...
microbutton ="microbuttB";
for(i=1;i<=12;i++){
	
	if(i == 7){microbutton = "microbuttC" }else{microbutton = "microbuttB";} if(i == 12){microbutton = "microbuttD";}
	if(i == 6 || i == 12){ digiW = "width:37px;";} else{ digiW = "width:37px;";}
	//-------------------------------------------------------------------------
	if(i<=6){pcatDIGI= pcatDIGI + "<div class='microbuttB' style='"+ (window['cbg'+ i ]) +" position:absolute; top:23px; "+ digiW +" left:" + ((i*47)-47) + "px;' onclick='pcatDIR("+i+");'>"+i+"</div>";} else {
	pcatDIGI= pcatDIGI + "<div class='"+microbutton+"' style='"+ (window['cbg'+ i ]) +" position:absolute; top:45px; "+ digiW +" left:" + (((i-6)*47)-47) + "px;' onclick='pcatDIR("+i+");'>"+i+"</div>";
	}
	
}//end for pcatDIGI
pcatDIGI+="</div>";


}
renderDigi();
//END DIGI =================================



renderCBG = function(){
//"<div style='background:#f69; height:auto; position:absolute;'>""</div>" <div style='background:#f69; height:auto; position:absolute;'>
pcat1= /*pcatDIGI +*/ "<div class='microbuttA' id='buttcat' style='top:1px; width:272px; position:relative;'  onclick='showcat();' > <img src='images/m_cat_icon.png'  /></div>";//</div> CATEGORIESalign='top' top:43px;
//use happyending

pcat2 = "";
for(i=1;i<=12;i++){
	pcat2 = pcat2 + "<div class='buttcat2' onclick='hidecat("+i+"); ' style='margin-top:5px;"+ (window['cbg'+ i ]) +"position:relative;' > "+ (window['catnm' + i])+" </div>"//top:"+ ((i*35)+30) +"px;
//use happyending
	}
//pcat2 = pcat2 + "</div>";
/*<div class='buttcat2' onclick='hidecat(1); ' style='top:43px;"+ cbg1 +"' > ONLINE GAMES </div>"+
"<div class='buttcat2'  onclick='hidecat(2);' style='top:83px;"+ cbg2 +"'> DIRECT MARKETING </div>"+
"<div class='buttcat2'  onclick='hidecat(3);' style='top:123px;"+ cbg3 +"'> LEAD GENERATION </div>"+
"<div class='buttcat2'  onclick='hidecat(4);' style='top:163px;"+ cbg4 +"'> E-COMMERCE </div>"+
"<div class='buttcat2'  onclick='hidecat(5);' style='top:203px;"+ cbg5 +"'> MFG CATALOG </div>"+
"<div class='buttcat2'  onclick='hidecat(6);' style='top:243px;"+ cbg6 +"'> AD AGENCY </div>"+
"<div class='buttcat2'  onclick='hidecat(7);' style='top:283px;"+ cbg7 +"'> TRAFFIC NETWORKS </div>"+
"<div class='buttcat2'  onclick='hidecat(8);' style='top:323px;"+ cbg8 +"'> INTERACTIVE BANNERS </div>"+
"<div class='buttcat2'  onclick='hidecat(9);' style='top:363px;"+ cbg9 +"'> EMAIL PUBLISHERS </div>"+
"<div class='buttcat2'  onclick='hidecat(10);' style='top:403px;"+ cbg10 +"'> SOFTWARE </div>"+
"<div class='buttcat2'  onclick='hidecat(11);'style='top:443px;"+ cbg11 +"' > MOBILE </div>"+
"<div class='buttcat2'  onclick='hidecat(12);' style='top:483px;"+ cbg12 +"'> GRAPHIC ART </div></div>";*/
}
renderCBG();
 //

//pcat1 = pcat1 + "</div>";
//pcat2 = pcat2 + "</div>"

pcat = pcat1;


//max category tabs
maxcat = 12; //maxcat = 2;
pmax1 = 15;
pmax2 = 9;
pmax3 = 9;
pmax4 = 6;
pmax5 = 4;
pmax6 = 4;
pmax7 = 4;
pmax8 = 7;
pmax9 = 10;
pmax10 = 5;
pmax11 = 1;
pmax12 = 17;



pbuttparS = '';
//how will it change if cased with div
pnavA="<div id='pbuttpar' style='height:43px'><div class='pbutt' id='buttinfo' onclick='pINFO();' ><img src='images/m_pinfo.png'/></div>"+
 "<div class='pbutt' id='buttprev' onclick='portprev();'><img src='images/m_try_left.png'/></div>"+
 "<div class='pbutt' id='buttnext' onclick='portnext();'><img src='images/m_try_right.png'/></div>"+"</div>"; //short
pnavB="<div id='pbuttpar' style='height:43px; "+ pbuttparS +" '><div class='pbutt' id='buttinfo' onclick='pINFO();' ><img src='images/m_pinfo.png'/></div>"+
 "<div class='pbutt' id='buttprev' onclick='portprev();'><img src='images/m_try_left.png'/></div>"+
 "<div class='pbutt' id='buttnext' onclick='portnext();'><img src='images/m_try_right.png'/></div>"+"</div>"; //long
//height:102px,height:482px;
 pnav = pnavA;
//pbuttpar.style.background="#f96";

// PORTFOLIO DATA --------------------------------------------------------------

//1 online games = 15
pi_1_1="<span class='bigarial'>SKATE DOG</span><br><span class='smallarial'>Skate Dog is an online game developed with Flash ActionScript 2, this game utilizes the Mochiads API which serves commercials and ads before each game play. Skate Dog is also sponsored by DailyPcGame, and is widely distributed thus building a revenue stream through mochiads and providing traffic to DailyPCGame.com </span>";

pi_1_2="<span class='bigarial'>ARCADE PINBALL</span><br><span class='smallarial'>Arcade Pinball is a classic game developed developed for Gamevance Tournament Game Network. This game was developed in Flash with AS2. Some of the graphics were created in photoshop. Arcade Pinball was a challenging game to program, but it was definitely a fun project. </span>";

pi_1_3="<span class='bigarial'>SPACE BLING</span><br><span class='smallarial'>Space Bling is an online game developed with Flash ActionScript 2, this game utilizes the Mochiads API which serves commercials and ads before each game play. Space Bling is also sponsored by DailyPcGame, and is widely distributed thus building a revenue stream through mochiads and providing traffic to DailyPCGame.com </span>";

pi_1_4="<span class='bigarial'>RIVER MONKEYS</span><br><span class='smallarial'>River Monkeys is a fun game developed as a freelance project for Gamevance. This game was fun to program and was relatively simple to produce. The prize based tournament component makes any flash game much more fun to play as you are competing against thousands of other players for a free iPod. </span>";

pi_1_5="<span class='bigarial'>ZOMBIE BLASTER</span><br><span class='smallarial'>Zombie Blaster  is an online game developed with Flash ActionScript 2, this game utilizes the Mochiads API which serves commercials and ads before each game play. Zombie Blaster is also sponsored by DailyPcGame, and is widely distributed thus building a revenue stream through mochiads and providing traffic to DailyPCGame.com </span>";

pi_1_6="<span class='bigarial'>SPIN THE WHEEL GAME</span><br><span class='smallarial'>Spin The Wheel Game is a fun I created while working for GameVance. This game is suited for those gamers that don't have the highest skill level, yet still want a fair chance to compete in the daily tournaments. Games like Spin The Wheel Game enable users to login during lunch hour and get a few spins in. The more you spin the better chance you have to win the prize. </span>";

pi_1_7="<span class='bigarial'>SURF DUDE</span><br><span class='smallarial'>Surf Dude is an online game developed with Flash ActionScript 2, this game utilizes the Mochiads API which serves commercials and ads before each game play. Surf Dude is also sponsored by DailyPcGame, and is widely distributed thus building a revenue stream through mochiads and providing traffic to DailyPCGame.com </span>";

pi_1_8="<span class='bigarial'>SKY RANGER</span><br><span class='smallarial'>Sky Ranger is a game developed for Gamevance. I provided the ActionScript programming and UI for this game. I worked closely with an artist that helped create the airplane and background art. </span>";

pi_1_9="<span class='bigarial'>SOCCER DOG</span><br><span class='smallarial'>Soccer Dog is like a well elaborated practical joke. Working with a digital illustrator, we created this game where soccer dog kicks the ball (much like hacky sack from California games); anyway, the joke is:  how long can a person play Soccer Dog in effort to win a free cell phone? Answer: A long @$$ time lol… The Tournament Component always makes the game more fun to play (and design). </span>";

pi_1_10="<span class='bigarial'>SKI RACER</span><br><span class='smallarial'>Ski Racer is an online game developed with Flash ActionScript 2, this game utilizes the Mochiads API which serves commercials and ads before each game play. Ski Racer is also sponsored by DailyPcGame, and is widely distributed thus building a revenue stream through mochiads and providing traffic to DailyPCGame.com </span>";

pi_1_11="<span class='bigarial'>ICE BREAKER</span><br><span class='smallarial'>Ice Breaker was one of my first games created for ArcadeRockstar (now Gamevance) I built this game over a few weekends to prove 'I can do this!'. Ice Breaker worked well in the tournament network and it picked up a sponsorship from Devry University. From here on out, when I finished the work that I was responsible for, I used the time left over to create new games .  </span>";

pi_1_12="<span class='bigarial'>TRICK OR TREAT</span><br><span class='smallarial'>Trick or Treat is a Halloween game that we developed for Gamevance. I worked on the ActionScript programming and I had a digital illustrator work on the art. </span>";

pi_1_13="<span class='bigarial'>SMASH MOUSE</span><br><span class='smallarial'>Smash Mouse is a game that I programmed for the Gamevance Network. I provided a crude working model to the digital illustrator, he passed it back to me and I dialed in the rest of the programming *making sure that nobody ties at the end of the tournament and all the other bugs that need to be dialed with a tournament game. I created a neat piece of software that detects the players browser speed and several other traps to catch cheaters in the act.  </span>";

pi_1_14="<span class='bigarial'>SCUBA DUDE</span><br><span class='smallarial'>Scuba Dude, one of the early games developed for ArcadeRockstar (now Gamevance)  was designed to emulate the underwater levels of Super Mario Brothers. This game helped me learn the value of CPU resource control (meaning you can only have so many fish before the computer starts slowing down)… When I started designing websites we used a term called: '56k'… needless to say, I know how to 'keep it light'. </span>";

pi_1_15="<span class='bigarial'>CUPIDS VALENTINE</span><br><span class='smallarial'>Cupids Valentine (like Trick or Treat) is a holiday game developed quickly for the Gamevance Tournament Network. I believe the game play programming for this game took me roughly 45 minutes before I passed it over to the digital illustrator: cupid controls, looped animated hearts, clouds, and a hitTest… Done! </span>";

// 2 DIRECT MARKETING = 9
pi_2_1="<span class='bigarial'>TRI CLEAR</span><br><span class='smallarial'>Tri Clear is a facial treatment campaign that involved a landing page and check out process. I designed the UX and graphics for this campaign. The Developers used my PSD files to build out and launch the campaign. I also designed several banner and email 'kreative' leading customers to this page. </span>";

pi_2_2="<span class='bigarial'>KEEP YOUR EYES OPEN</span><br><span class='smallarial'>Keep Your Eyes Open is a Action Sports Film produced by Artisan Entertainment, a client of big development (where I had worked as Art Director). This Project Involved Website design with flash video intro (granted this was pre-youtube / 56k style) quite the accomplishment at the time; the project also involved screen savers and wall papers which I designed. I am proud to have this project in my portfolio.  </span>";

pi_2_3="<span class='bigarial'>ELITE AUTO PROTECTION</span><br><span class='smallarial'>Elite Auto Protection is a Website built to market an Auto Warranty Service. I created all the front end design and HTML programming for this project. </span>";

pi_2_4="<span class='bigarial'>PURE FIT</span><br><span class='smallarial'>PureFit, a client of Ideal Exposure (now future ads) worked with us to create a direct marketing campaign. We took their product and applied it to the ever so popular recurring membership program. This campaign involved several landing page designs with a checkout process plus several 'ad kreatives'. </span>";

pi_2_5="<span class='bigarial'>ASAP</span><br><span class='smallarial'>Advanced Service And Performance is a project I landed through my connections at buderengle (san Francisco) this was a web page that lays out the services and information pertaining to ASAP </span>";

pi_2_6="<span class='bigarial'>REAL ESTATE INVESTORS GUIDE</span><br><span class='smallarial'>Real Estate Investors Guide was a project that involved landing page design and the UX shopping cart design. This campaign offers an informative guide to interested customers free for the cost of shipping and handling. </span>";

pi_2_7="<span class='bigarial'>GOOGLE ADWORDS SUCCESS KIT</span><br><span class='smallarial'>Google Adwords Success Kit, this campaign involved a landing page also the check out process. This product provides people with useful information about success with Google Adwords and providing them with the appropriate affiliate id that serves a generous payout of up to *80$ per referral. </span>";

pi_2_8="<span class='bigarial'>ULTRA RELIEVIEF</span><br><span class='smallarial'>Ultra Relief is a pain reliever product sold online without a prescription; it was my job to 'kreate' the online campaign: Several landing pages, check out process, banner ads, email ads. </span>";

pi_2_9="<span class='bigarial'>LIVING CHRISTIAN</span><br><span class='smallarial'>Living Christian is a set of bible based audio tracks available online; it was my job to create a direct marketing campaign for this product. I provided the landing page design, check out process, and several 'ad kreatives'. </span>";

// 3 LEAD GENERATION = 9
pi_3_1="<span class='bigarial'>ADT </span><br><span class='smallarial'>Working with a client that had a 200+ person call center, we worked hard to produce the perfect campaign to generate leads for ADT Security Systems.  ADT pays out upward of $250 per referred customers and we were receiving thousands of leads each day. </span>";

pi_3_2="<span class='bigarial'>READY MORTGAGE</span><br><span class='smallarial'>I worked directly with Ready Mortgage to build a site that served both as a lead generation tool and a corporate website. I designed and programmed the site, creating a database in MySQL that is accessible by a custom backend interface so the owner can manage leads collected. </span>";

pi_3_3="<span class='bigarial'>INCENTIVE STREET</span><br><span class='smallarial'>Incentive Street is a clever Co-Reg campaign… for those familiar with the CR process the site provided qualified users with free iPods while entering them into a raffle for a chance to win a new car. It was my job to provide an eye catching front end design qualification step process. I also have experience with other CR properties such as Free Gift Bonanza. </span>";

pi_3_4="<span class='bigarial'>FAMILY HEALTH PLAN</span><br><span class='smallarial'>Family Health Plan is a campaign that generates health insurance leads. It was my job to improve upon an existing web property providing an improved landing page, process pages and 'adkreative'. </span>";

pi_3_5="<span class='bigarial'>DIRECT TV</span><br><span class='smallarial'>How much does Direct TV pay its advertisers? (let me check) about $110.00 to $230.00 per sale 'nice'… This is one of the landing pages I created for a <b>Direct TV Lead Generation Campaign</b> It was my job to create an array of pages that can convert traffic into leads prompting customers toward dismissing cable service in exchange one of several other services that offered a chance for savings. </span>";

pi_3_6="<span class='bigarial'>REAL ESTATE RELIEF NETWORK</span><br><span class='smallarial'>The Real Estate Relief Network needed a site redesign to help better generate leads of people that need re-financing service for their homes. It was my job to provide an upgraded look and feel to the web interface and process pages. I integrated the necessary PHP and added a few variables such as affiliate & client tracking and setup the system to their existing MySQL database. </span>";

pi_3_7="<span class='bigarial'>GOOGLE MASTERS</span><br><span class='smallarial'>Google Masters is a campaign that involved a landing page user checkout process. This product provides people with useful information about success with Google Adwords and provides them with the appropriate affiliate id that serves a generous payout of up to *80$ per referral. </span>";

pi_3_8="<span class='bigarial'>FAMILY SAVERS CLUB</span><br><span class='smallarial'>This vacation offer is the landing page for a co-reg process providing qualified consumers with a free vacation. </span>";

pi_3_9="<span class='bigarial'>INTERNET CAREER KIT</span><br><span class='smallarial'>Internet Career Kit is a campaign that involved a landing page user checkout process. This product provides people with useful information about success with Google Adwords and provides them with the appropriate affiliate id returning a generous affiliate payout. </span>";

//4 ECOMMERCE = 6
pi_4_1="<span class='bigarial'>SKULL X BONES CRUISERS</span><br><span class='smallarial'>Skull x Bones Bicycles was a great ongoing project that involved an e-commerce website custom developed and tailored for the client. So many cool bikes and we had a great photographer who provided excellent product shots. Over several years working with Skull x bones, the site changed scale and evolved taking on new transformations. </span>";

pi_4_2="<span class='bigarial'>HB EASYRIDER</span><br><span class='smallarial'>Huntington Beach Easyrider is a skate shop on main street HB, it is pretty much the only place in orange county where you can get core old school skate gear. This ongoing project involved an online store built upon osCommerce shopping cart software. </span>";

pi_4_3="<span class='bigarial'>UNDERGROUND GARMET COALITION</span><br><span class='smallarial'>UGC – Underground Garmet Coalition is a clothing distribution chain; this project involved design and development of an ecommerce site built completely in flash. </span>";

pi_4_4="<span class='bigarial'>BORN PUNK</span><br><span class='smallarial'>Born Punk is a boutique clothing store on main street in Huntington Beach, the have a wide selection of Hip Baby products so that your baby can look super punk. This ongoing project, involved the development of their online store using osCommerce shopping cart software. </span>";

pi_4_5="<span class='bigarial'>DANK CLOTHING</span><br><span class='smallarial'>Dank Clothing (one of my first clients) provided several interesting projects including the shopping cart/ catalog built completely with flash. </span>";

pi_4_6="<span class='bigarial'>MONA LISA</span><br><span class='smallarial'>Mona Lisa is an ecommerce/ catalog project that had cool JavaScript drop down menus and a variety of hair products. This client was well organized and had their overall look and feel already complete, my job was simply to develop out the site and to provide some navigation expertise. </span>";

//5 MFG CATALOG = 4
pi_5_1="<span class='bigarial'>PREMIER PAVING INC</span><br><span class='smallarial'>Premier Paving Inc is a web design project that I designed with an agency known as buderengel; this project was basically an upgrade from their previous site that had become outdated. </span>";

pi_5_2="<span class='bigarial'>AMI02</span><br><span class='smallarial'>Advanced Micro Instruments is an oxygen sensor manufacturer, working with an agency known as cool marketing ideas, we produced a website and a printed catalog for their line of o2 sensors. </span>";

pi_5_3="<span class='bigarial'>DANK CLOTHING</span><br><span class='smallarial'>Dank Clothing (one of my first clients) provided several interesting projects including the shopping cart/ catalog built completely with flash. </span>";

pi_5_4="<span class='bigarial'>SKULL X BONES</span><br><span class='smallarial'>Skull x Bones Bicycles was a great ongoing project that involved an e-commerce website custom developed and tailored for the client. So many cool bikes and we had a great photographer who provided excellent product shots. Over several years working with Skull x bones, the site changed scale and evolved taking on new transformations.</span>";

//6 AD AGENCY = 4
pi_6_1="<span class='bigarial'>BLOOSKY</span><br><span class='smallarial'>bloosky, an online advertiser, was a solid client that provided several projects. I designed their corporate website and media kit in 07 as well as several online campaigns.  </span>";

pi_6_2="<span class='bigarial'>BLOOSKY MEDIA KIT</span><br><span class='smallarial'>bloosky, an online advertiser, was a solid client that provided several projects. I designed their corporate website and media kit in 07 as well as several online campaigns.  </span>";

pi_6_3="<span class='bigarial'>IDEAL EXPOSURE</span><br><span class='smallarial'>Ideal Exposure (now futureads.com) is an advertising agency parenting a large array of online products and services. I served Ideal Exposure as full time Art Director for over 3 years and worked on several interesting projects. </span>";

pi_6_4="<span class='bigarial'>BIG DEVELOPMENT</span><br><span class='smallarial'>Big development is a web design agency that provides robust web solutions to clients such as OP and Artisan Entertainment. It is here that I saw my first 'camera phone' … we even created a web property called fonepost, a predecessor to the social networks you see today (facebook & myspace). The project you see here is the design for the big development corporate website. </span>";

//7 TRAFFIC NETWORKS = 4
pi_7_1="<span class='bigarial'>TRAFFIC VANCE</span><br><span class='smallarial'>Traffic Vance is a software interface for Advertisers who serve targeted  ads served via the GameVance client property. This project involved the design of the front end website as well as software UX design. </span>";

pi_7_2="<span class='bigarial'>QOOLAID NETWORK</span><br><span class='smallarial'>The Qoolaid Network, a predecessor to the much more user valued GameVance web property, is a project that involved the design of a corporate website. </span>";

pi_7_3="<span class='bigarial'>CASH ROCKSTAR</span><br><span class='smallarial'>Cash Rockstar is a software interface for Advertisers who serve targeted  ads. This project involved the design and development of the front end website. </span>";

pi_7_4="<span class='bigarial'>DAILYPCGAME</span><br><span class='smallarial'>DailyPcGame is an portal for flash games. This in house project involved the design and development of the  DailyPcGame website and brand as whole including 5 flash games. </span>";

//8 INTERACTIVE BANNERS = 7
pi_8_1="<span class='bigarial'>SURF BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Web, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. </span>";

pi_8_2="<span class='bigarial'>DEMOLITION DERBY BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Bytel, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. </span>";

pi_8_3="<span class='bigarial'>AIRHOCKEY BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Web, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. It was with this banner that programming really started to click with me and I realized that I can program anything that I can think of… Air Hockey was further developed into a tournament game and was played by over 1 million people. </span>";

pi_8_4="<span class='bigarial'>MONSTER TRUCK BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Bytel, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. </span>";

pi_8_5="<span class='bigarial'>STREET RACE BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Bytel, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. </span>";

pi_8_6="<span class='bigarial'>MONKEY BANNER</span><br><span class='smallarial'>Working with Ideal Exposure and providing traffic to Auto Web, I worked diligently to provide as many qualified clicks as possible. After producing the general 'car ad' look and feel I discovered that these highly interactive flash banners get a lot more clicks. </span>";

pi_8_7="<span class='bigarial'>CHICKEN SHOOTER BANNER</span><br><span class='smallarial'>Stinky Eggs was a software product that provided free jokes daily. This is an interactive banner that provides a landing page where they can download the Stinky Eggs software. </span>";

//9 EMAIL PUBLISHERS = 10
pi_9_1="<span class='bigarial'>ADSENSE EMAIL</span><br><span class='smallarial'>Email ad for a Google Startup Guide Offer, a product that provides people with useful information about success with Google Adwords.  </span>";

pi_9_2="<span class='bigarial'>TRICLEAR EMAIL</span><br><span class='smallarial'>Tri Clear is a facial treatment campaign that involved a landing page and check out process. I designed the UX and graphics for this campaign. The Developers used my PSD files to build out and launch the campaign. I also designed several banner and email 'kreative' leading customers to this page. </span>";

pi_9_3="<span class='bigarial'>FAMILY HEALTH PLAN EMAIL</span><br><span class='smallarial'>Family Health Plan is a campaign that generates health insurance leads. It was my job to improve upon an existing web property providing an improved landing page, process pages and 'adkreative'. </span>";

pi_9_4="<span class='bigarial'>ADT EMAIL</span><br><span class='smallarial'>Working with a client that had a 200+ person call center, we worked hard to produce the perfect campaign to generate leads for ADT Security Systems.  ADT pays out upward of $250 per referred customers and we were receiving thousands of leads each day. </span>";

pi_9_5="<span class='bigarial'>ULTRA RELIEF EMAIL</span><br><span class='smallarial'>Ultra Relief is a pain reliever product sold online without a prescription; it was my job to 'kreate' the online campaign: Several landing pages, the check out process, banner ads, and Email Ads. </span>";

pi_9_6="<span class='bigarial'>WORK FROM HOME EMAIL</span><br><span class='smallarial'>Email ad offering a Work From Home package, a product that provides people with useful information about success with Google Adwords.  </span>";

pi_9_7="<span class='bigarial'>WORK FROM HOME EMAIL</span><br><span class='smallarial'>Email ad offering a Work From Home package, a product that provides people with useful information about success with Google Adwords.  </span>";

pi_9_8="<span class='bigarial'>LIVING CHRISTIAN EMAIL</span><br><span class='smallarial'> Living Christian is a set of bible based audio tracks available online; it was my job to create a direct marketing campaign for this product. I provided the landing page design, check out process, and several 'ad kreatives'.</span>";

pi_9_9="<span class='bigarial'>ADSENSE EMAIL</span><br><span class='smallarial'>Email ad for a Google Startup Guide Offer, a product that provides people with useful information about success with Google Adwords.  </span>";

pi_9_10="<span class='bigarial'>CI WEBSITE DESIGN</span><br><span class='smallarial'>This website is part of a corporate identify package developed for an e-marking agency. </span>";

//10 SOFTWARE = 5
pi_10_1="<span class='bigarial'>GAMEVANCE</span><br><span class='smallarial'>Gamvance is a social web portal for online tournament games. Visitors are encouraged to engage the tournament software process for their opportunity to play free games and win really cool prizes such as ipods, psps, and smart phones. This project involve over 100 landing pages (non of which performed better than #3), 100% UX for all components of the product, several banner ads, email ads, full media kit including a tradeshow booth, over 15 tournament, and a series of software implements that stopped thousands of people from cheating the tournament. Gamevance has given away over $4,920,000 in prizes and counting. Wow! </span>";

pi_10_2="<span class='bigarial'>AUTOMATICE INTERACTIVE</span><br><span class='smallarial'>Automatic interactive is a bulk email delivery software / service providing email advertisers the ability to access fast email servers with a great backend advertising interface. This project involved UX design across the software platform, development of the corporate website and a media kit package including folders, brochures, letterhead, business cards, letter envelopes and large envelopes. </span>";

pi_10_3="<span class='bigarial'>QOOLAID NETWORK</span><br><span class='smallarial'>Qoolaid Network, a predecessor to the Gamevance network was is a web property parented by ideal exposure. This project involved several banner ads, corporate sites and a consumer website. </span>";

pi_10_4="<span class='bigarial'>ADBEHAVIOR</span><br><span class='smallarial'>Adbehavior is a corporate website promoting ad-serving software to online advertisers. This project involved basic concept design process plus development with some interactive flash elements. </span>";

pi_10_5="<span class='bigarial'>ARCADE ROCKSTAR</span><br><span class='smallarial'>ArcadeRockstar is the direct predecessor to Gamevance. I had the opportunity to be at a few ad-tec tradeshows both in New York and San Francisco; This is the tradeshow display that I designed and produced… the whole display fits inside the podium and can be wheeled to the airport as luggage (about 50-75 lbs); </span>";

//11 MOBILE = 1
pi_11_1="<span class='bigarial'>MAGIC 8 BALL</span><br><span class='smallarial'>Magic 8 Ball, the phone toy we all remember as kids. In order to test my skills and prepare myself for up and coming mobile development projects, I created this fun little app; THE MAGIC 8 BALL… everything you would expect with the traditional 8 Ball toy (only smaller). Next time you can't decide where to eat lunch or if you simply need dating advice – look no further than the nifty MAGIC 8 BALL APP. </span>";

//12 GRAPHIC ART = 15
pi_12_1="<span class='bigarial'>MYSTICAL TREE</span><br><span class='smallarial'>This is a graphic design created from a picture taken at UCI; basically it was a night shot, the tree had an orange light. I applied an inversion of the image which inverted black and orange to white and purple. I further applied some layers and effects with type until finished: Mystical Tree. </span>";

pi_12_2="<span class='bigarial'>ABSTRACT STRUCTURE</span><br><span class='smallarial'>This art piece, created in Cinema 4D, was a design created during a minimal phase of my design career where I focused on getting most out of the light and texture capabilities of c4d. When this was created it took much effort to get this look and feel, today it takes only moments. As with photography and film, the magic is in the light(s). </span>";

pi_12_3="<span class='bigarial'>ONE ARROW GOES LEFT</span><br><span class='smallarial'>Keeping true to the minimalistic art forms this piece has always stood out to me I especially enjoy the anomaly of the  single arrow pointing left, synonymous to the salmon swimming upstream. </span>";

pi_12_4="<span class='bigarial'>MAGNETIC PROPULSION</span><br><span class='smallarial'>Another piece of minimalistic wonder, this artwork represents the technology present in magnetic propulsion and soothes my desire to further communicate the future of cylinder rotation technology. </span>";

pi_12_5="<span class='bigarial'>SECRET FORMULA</span><br><span class='smallarial'>The secret formula is an art piece derived from an in-depth C4D hypernurbs / particle emitter animation study producing this lava lamp effect. I used this artwork as a wall paper download on the initial smr7.com portfolio website. </span>";

pi_12_6="<span class='bigarial'>WORLD WIDE</span><br><span class='smallarial'>Worldwide, an art piece created with C4D,  is a abstract representation of network technology and future. I used this artwork as a wall paper download on the initial smr7.com portfolio website. </span>";

pi_12_7="<span class='bigarial'>CUBE FORM ADVERTISMENT</span><br><span class='smallarial'>This is a picture from the John Wayne Airport; the Cube Form is the logo/icon for smr7.com is a minimal hexahedron formation representing a more elusive plutonic solid. This artwork was also used as a wall paper download on the initial smr7.com portfolio website. </span>";

pi_12_8="<span class='bigarial'>FAVORITE SNOW PICS</span><br><span class='smallarial'>From another time and another life, these are two of my favorite pictures that were taken of my while I was snowboarding. The shot on the right was taken by senior photographer for Transworld Snowboarding and was published in the April 01 issue of TWS; this shot was taken in mammoth, 3 weeks later, I shattered my leg in Mt Hood Oregon. In some ways I am glad I got hurt because it gave me the opportunity to start over with my web design career which I enjoy to this day. </span>";

pi_12_9="<span class='bigarial'>SHAPE AND COLOR</span><br><span class='smallarial'>This is one of my favorite Shape Color + line studies. Color is so important for any campaign; I have researched color in many ways including conversion statistics, mathematics and fractals. </span>";

pi_12_10="<span class='bigarial'>THE UNDERWORLD</span><br><span class='smallarial'>A darker piece representing the world beneath the floor, a dimension of Hades, described as the burning lake of fire with the all Seeing Eye. I have since seen this motif across many art forms and media. </span>";

pi_12_11="<span class='bigarial'>DIGITAL ILLUSTRATION</span><br><span class='smallarial'>While taking digital illustration at Cal State Fullerton, I had bi-weekly art assignments; since these assignments are designed to help the student build a portfolio, here you go, I call this piece: Leisure Time. It is based from a magazine photo of Josh Sleigh. </span>";

pi_12_12="<span class='bigarial'>MINIMALISTIC VECTOR</span><br><span class='smallarial'>I created this vector art piece during a phase where I was very interested in Manga. My goal with this artwork was to represent figure with the least information possible while staying true to the identity of the figure. </span>";

pi_12_13="<span class='bigarial'>EXISTENCE VERIFICATION 10.10.02</span><br><span class='smallarial'>An early abstract art piece based on a photo I took at UCI. Early in my career I was highly inspired by 2a.v2 this piece portrays such a style. </span>";

pi_12_14="<span class='bigarial'>KYEO WALLPAPER</span><br><span class='smallarial'>This is an wall paper design created for the Keep Your Eyes Open Campaign produced with big development for Artisan Entertainment. This wall paper design was part of a huge campaign that involved a Website, Flash Intro, and several Animated Screen Savers. </span>";

pi_12_15="<span class='bigarial'>3D ABSTRACT</span><br><span class='smallarial'>This 3D Abstract was one of the first, created with Bryce. Becoming familiar with Bryce 3D helped me to set the bar as to what level of quality I wanted to receive with C4D. I have worked with several 3D platforms including 3D Studio Max, LightWave, Maya, Swift 3D of all that I have tried I prefer to use Cinema 4D. </span>";

pi_12_16="<span class='bigarial'>3D SCULPTURE</span><br><span class='smallarial'>I created this art piece while taking a 3D design course. it is fun working with your hands. I have since applied these skills into surfboard designs – getting a great deal of 'function with the form'.</span>";

pi_12_17="<span class='bigarial'>3D SCENE</span><br><span class='smallarial'>I created this piece early in 3D with Bryce, I have always enjoyed the feeling of this landscape, it has so much life.</span>";


// END PORTFOLIO CONTENT --------------------------------------------------------------
	
	