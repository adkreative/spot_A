<?



$name = $_POST["goname"];
$email = $_POST["goemail"];
$phone = $_POST["gophone"];
$greeting = $_POST["gogreeting"];
//
$userdata = $_POST["userdata"];

$sent = 'true';
$fcount = 0;

//predefine error colors as normal
$verba="<div class='bg' >NAME : "; $verbb="<div class='bg' >eMAIL : "; $verbc="<div class='bg' >PHONE : "; 
$verbd="<div class='bg' style='height:105px;'>GREETING : ";

//check for errors
if($name ==""){$fcount++; $verba="<div class='bgE' >*NAME : "; }
//email

// action // if($phone == ""){$fcount++; $verbc="<div class='bgE' >*PHONE : "; }
//kreative phone check::::::::::::::::::::::::::::::::::::
$nu = $phone; //
$newnu = preg_replace('~[^0-9]~','',$nu); // strip number
$phonelength = strlen($newnu);  //how long
$used1 = substr($newnu, 0, 1); //did i use 1
if($used1 == 1){ $exnum = 11;} else { $exnum = 10;} //create expectation

//check again for extension
if($phonelength == $exnum){/*number is valid*/} else {
$exnu = strtoupper($nu); //uppercase
if (preg_match ('/[X]/i', $exnu)) {  $exsplit = "X";}else{ $exsplit = "E"; } //look for 'e,x' txt
$chkext = explode($exsplit,$exnu); //is there extension
$preex = preg_replace('~[^0-9]~','',$chkext[0]); //strip ext check
$preexlength = strlen($preex); //count length
if($preexlength == $exnum){/*number is valid*/} else{ $fcount++; $verbc="<div class='bgE' >*PHONE : "; }//measure

}//end extenstion check
//end kreative phone check::::::::::::::::::::::::::::::::::::

//kreative email check::::::::::::::::::::::::::::::::::::

$escore = 0;
if($email ==""){ $escore++;}
$email_array = explode("@",$email);
if($email_array[0] == ""){$escore++;}//if no name
if($email_array[1] == ""){$escore++;}//if no @ to split...
$local_array = explode(".",$email_array[1]);
if($local_array[0] == ""){$escore++;}//no predot
if($local_array[1] == ""){$escore++;}//no net or com
if($escore > 0){ $fcount++; $verbb="<div class='bgE' >*eMAIL : "; }

//end kreative email check:::::::::::::::::::::::::::::::


if($greeting ==""){$fcount++; $verbd="<div class='bgE' style='height:105px;'>*GREETING : "; }



//sum errors & reject ::::::::::::::::::::::
if($fcount >=1){ include('mobile_i_form.php'); }


// sum errors & accept submission ::::::::::::::::::::::::::::::::::::::
if($fcount ==0){$myform="complete"; include('mobile_i_go.php'); }
	
//include('mobile_i_go.php');
?>