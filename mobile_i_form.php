<!DOCTYPE html>
<!--<html xmlns="http://www.w3.org/1999/xhtml">-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ADKREATIVE MOBILE i FORM</title>
<style type='text/css'>
/*FORM*/
body{margin:0px 0px 0px 0px; background:none;}
.bg{ background:#abb7b7; padding: 0px 10px 2px 10px; text-align:right; width: 71px; margin-bottom:1px; height:28px; line-height:28px; 
font-size:11px; color:#0f0000; font-family:Tahoma, Arial, Helvetica, sans-serif; font-weight:700; margin:5px 0px 5px 0px;
-moz-border-radius: 7px 0px 0px 7px; -webkit-border-radius: 7px 0px 0px 7px; -khtml-border-radius: 7px 0px 0px 7px; border-radius: 7px 0px 0px 7px;
}
.bgE{ background:#ff8400; padding: 0px 10px 2px 10px; text-align:right; width: 71px; margin-bottom:1px; height:28px; line-height:28px; 
font-size:11px; color:#0f0000; font-family:Tahoma, Arial, Helvetica, sans-serif; font-weight:700; margin:5px 0px 5px 0px;
-moz-border-radius: 0px 0px 0px 7px; -webkit-border-radius: 0px 0px 0px 7px; -khtml-border-radius: 0px 0px 0px 7px; border-radius: 0px 0px 0px 7px;
}
input.kmobile{left:91px; width:182px; height:26px; padding: 0px 0px 2px 5px; margin-bottom:1px;  background:#ffffff; border:1px solid #abb7b7;  
border-left:none;
-moz-border-radius: 0px 7px 7px 0px; -webkit-border-radius: 0px 7px 7px 0px; -khtml-border-radius: 0px 7px 7px 0px; border-radius: 0px 7px 7px 0px;
/*padding:2px;*/ position:absolute;  
font-size:11px; color:#0f0000; font-family:Tahoma, Arial, Helvetica, sans-serif; font-weight:700; 
}
textarea.kmobile{ left:91px; width:182px; height:98px; background:#ffffff;  padding:5px 0px 2px 5px;  position:absolute;
border:1px solid #abb7b7;  border-left:none; -moz-border-radius: 0px 7px 7px 0px; -webkit-border-radius: 0px 7px 7px 0px; -khtml-border-radius: 0px 7px 7px 0px; border-radius: 0px 7px 7px 0px; resize: none; margin-top:0px;
font-size:11px; color:#0f0000; font-family:Tahoma, Arial, Helvetica, sans-serif; font-weight:700; overflow:auto; 
 }

#gobutton{ background:#abb7b7; width:120px; height:34px; left:157px; position:absolute; cursor:pointer; padding:3px 15px 3px 15px; margin-top:2px;
 -moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;
 font-size:10px; color:#fff; font-family:Tahoma, Arial, Helvetica, sans-serif; font-weight:700; text-align:center; border:none;}
/*279 -10 -10 -75 -2 -20 -4*/

.ecard{line-height:35px; font-size:9px; color:#abb7b7; font-family:Tahoma, Arial, Helvetica, sans-serif;
	text-align:left; margin-top:15px; font-weight:bold; padding-left:3px; padding-bottom:3px; text-decoration: none; border-bottom:1px dashed;}
.lilarrow{background:#fff; color:#abb7b7; padding: 0px 1px 1px 1px;}
.bluearrow{color:#abb7b7; font-size:9px; font-family:Tahoma, Arial, Helvetica, sans-serif;}
hr.lte{margin: 5px 5px 5px 0px; border:0px; border-bottom: 1px dashed #abb7b7;}
</style>

</head>

<body>
<? 
//form variables
if($sent != 'true'){
$name = "";
$email = "";
$phone = "";
$greeting = "";
//non error
$verba="<div class='bg' >NAME : "; $verbb="<div class='bg' >eMAIL : "; $verbc="<div class='bg' >PHONE : "; 
$verbd="<div class='bg' style='height:105px;'>GREETING : ";

}

//userdata
$siten = $_SERVER["HTTP_HOST"]; $userip = $_SERVER["REQUEST_URI"];  $rmta = $_SERVER["REMOTE_ADDR"]; /*$imgc=rand(0,1);*/
$usera = $_SERVER["HTTP_USER_AGENT"]; 
$userdata="$siten | $rmta | $usera  ";
 //class='kmobile'
$drawForm = "

<form action='mobile_i_submit.php' method='POST' name='form'>

$verba<input type='text' name='goname' class='kmobile' value='$name'></div>
$verbb<input type='email' name='goemail' class='kmobile' value='$email' /></div>
$verbc<input type='tel' name='gophone' class='kmobile' value='$phone' /></div>
$verbd<textarea name='gogreeting' cols='15' rows='4' value='$greeting' class='kmobile' >$greeting</textarea></div>

<input type='hidden' name='form_id' value='MOBILE GREETING' />
<input type='hidden' name='a' value='$a' />
<input type='hidden' name='userdata' value='$userdata' />
<span class='ecard'>AUTO e-BUSINESS CARD</span><span class='bluearrow'> &#9658;</span>
<input type='submit' name='Submit' value='SEND GREETING'  id='gobutton' />
 <!--<input name='Submit' value='' type='image' src='images/submit_button.png'  />--><br></form><br>
";

print "$drawForm";
?>
</body>
</html>