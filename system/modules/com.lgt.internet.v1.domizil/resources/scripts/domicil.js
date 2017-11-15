

var domicilselection = "";
function Weiter (investor, overlay_side, overlay_side2, insti) {
  var obj=document.getElementById("disable_overlay");
  obj.style.zIndex=102;
  var obj_classname = "disable_overlay_" +overlay_side+ " opaque";
  var obj_classname2= "disable_overlay_" +overlay_side2+ " opaque";
  if (insti == '1'){
	  var activation = false;
  } else {
	  var activation = true;
  }
  if (investor == "institutionell") {
    obj.className=obj_classname;
	//activeButton ("submit_private", activation);
	if (activation){
	 document.getElementById("domicil_select").innerHTML = "<a href="+domicil_submit_link+" class='input_button' id='submit_private'>"+domicilSubmit+"</a>";
	} else {
	 document.getElementById("domicil_select").innerHTML = domicilSubmit;
	}
  } else if (investor == "reseller") {
    obj.className=obj_classname;
	//activeButton ("submit_private", activation);	
	if (activation){
	  document.getElementById("domicil_select").innerHTML = "<a href="+domicil_submit_link+" class='input_button' id='submit_private'>"+domicilSubmit+"</a>";
	} else {
	 document.getElementById("domicil_select").innerHTML = domicilSubmit;
	}
  }else if (investor == "private") {
    obj.className=obj_classname2;
	//activeButton ("submit_private", !activation);
	if (!activation){
	  document.getElementById("domicil_select").innerHTML = "<a href="+domicil_submit_link+" class='input_button' id='submit_private'>"+domicilSubmit+"</a>";
	} else {
	 document.getElementById("domicil_select").innerHTML = domicilSubmit;
	}
  }
  activateButton("submit_institutional");
}



function selectDomicil (){
	var e = document.getElementById("domicil");
	var locale = e.options[e.selectedIndex].value;
	if (document.getElementById("domicil_iframe") != null){
	document.getElementById("domicil_iframe").src=domicilMap[locale];
	if (document.getElementById("disclaimerLink") != null){
	 document.getElementById("disclaimerLink").href =domicilMap[locale];
	}
	
	//document.getElementById("domicil_iframe").src= "/shared/.content/lgt-internet-disclaimer/disclaimer_"+locale+".html";
	
	if (domicilMap[locale].match(/.disclaimer_private.html*/) || domicilMap[locale].match(/.disclaimer_intitutional.html$/)){
		document.getElementById("disclaimer").checked=false;
		document.getElementById("remember").checked=false;
		resetCheckboxes();
		document.getElementById("form_row_1").style.visibility = 'hidden';
		document.getElementById("form_row_2").style.visibility = 'hidden';
	} else {
		document.getElementById("form_row_1").style.visibility = '';
		document.getElementById("form_row_2").style.visibility = ''
	}
	}
	domicilselection = locale;
	activateButton("submit_institutional");
}

function selectDomicilSingle (){
	var e = document.getElementById("domicil");
	var locale = e.options[e.selectedIndex].value;
	if (document.getElementById("domicil_iframe") != null){
		if ( (locale == "")){
		 document.getElementById("domicil_iframe_div").style.visibility = 'hidden';
		 document.getElementById("domicil_iframe_div").style.height  = '0';
		} else {
		 document.getElementById("domicil_iframe_div").style.visibility = '';
		 document.getElementById("domicil_iframe_div").style.height  = '180px';
		 document.getElementById("domicil_iframe").src=domicilMap[locale];
		}
	if (document.getElementById("disclaimerLink") != null){
	 document.getElementById("disclaimerLink").href =domicilMap[locale];
	}
	
	//document.getElementById("domicil_iframe").src= "/shared/.content/lgt-internet-disclaimer/disclaimer_"+locale+".html";
	
	if (domicilMap[locale].match(/.disclaimer_private.html$/) || domicilMap[locale].match(/.disclaimer_intitutional.html$/)){
		document.getElementById("disclaimer").checked=false;
		document.getElementById("remember").checked=false;
		resetCheckboxes();
		document.getElementById("form_row_1").style.visibility = 'hidden';
		document.getElementById("form_row_2").style.visibility = 'hidden';
	} else {
		document.getElementById("form_row_1").style.visibility = '';
		document.getElementById("form_row_2").style.visibility = ''
	}
	}
	domicilselection = locale;
	activateButton("submit_institutional");
}

function changeDisclaimer(locale){
	document.getElementById("domicil_iframe").src=domicilMap[locale];
}

function activateButton (button){

	var radioclicked = false;
	if (document.getElementsByName('investor_check') == null){
	for (i = 0; i < document.getElementsByName('investor').length; i++) {
            if (document.getElementsByName('investor')[i].checked) {
               radioclicked = true;
            }
        }
	} else {
		radioclicked = true;
	}
	if (document.getElementById("domicil_iframe_div") != null){
	if (document.getElementById("domicil_iframe_div").style.visibility != 'hidden'){
		if (document.Domizilinvestor.disclaimer.checked == true && domicilselection != "" && radioclicked){
		 activeButton (button, true);
		 document.getElementById("domicil_selection_prim").className ="domicil_select domicil_select_active";
		} else {
		 activeButton (button, false);
		 document.getElementById("domicil_selection_prim").className ="domicil_select";
		}
	} else {
		if (domicilselection != "" && radioclicked){
		 activeButton (button, true);
		 document.getElementById("domicil_selection_prim").className ="domicil_select domicil_select_active";
		} else {
		 activeButton (button, false);
		 document.getElementById("domicil_selection_prim").className ="domicil_select";
		}
	}
	}
	else {
		if (document.Domizilinvestor.disclaimer.checked == true && domicilselection != "" && radioclicked){
		 activeButton (button, true);
		 document.getElementById("domicil_selection_prim").className ="domicil_select domicil_select_active";
		} else {
		 activeButton (button, false);
		 document.getElementById("domicil_selection_prim").className ="domicil_select";
		}
	}
	
}

function activeButton (button, val){
 if (val){
	document.getElementById(button).disabled = '';
	} else {
	document.getElementById(button).disabled = 'disabled';
	}
}