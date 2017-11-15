


function callOnLoad() {
	onload0();
	onload1();
	onload2();
	onload3();
	onload4();
	onload5();
	onload6();
}

$(document).ready(function(){
	callOnLoad();
});


// ---------------------------------------------------------------------------------------------------


// 				Begin document-ready-function


// ---------------------------------------------------------------------------------------------------


function onload0() {


	var isiOSDev = navigator.userAgent.match(/iPad/i) != null || navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;





	if(isiOSDev===true) {


//		alert("test");


		$('body').addClass("iOS");


//		$('#footer_wrapper').css("position","absolute");


	}


	docHeight = $(document).height();





// ---------------------------------------------------------------------------------------------------


// 				Font Size increase / decrease


// ---------------------------------------------------------------------------------------------------





	// read cookie


	if($.cookie('font_size')) {


		var cookieFontSize = $.cookie('font_size');


		$('html').css('font-size',cookieFontSize+"px");


	}





	// Reset Font Size


	var originalFontSize = $('html').css('font-size');


		$(".resetFont").click(function(){


		$('html').css('font-size', originalFontSize);


	});


	// Increase Font Size
	
		
	// Font Size constants	-> pb 12.01.12
	var fontSmall     = '10px';   // PB: for WebTrends Tracking
	
	var fontSmaller   = '11px';   // PB: for WebTrends Tracking
	
	var fontMedium    = '12px';   // PB: for WebTrends Tracking
	
	var fontBigger    = '13px';   // PB: for WebTrends Tracking
	
	var fontLarge      = '14px';   // PB: for WebTrends Tracking


	$(".increase").click(function(){


		var currentFontSize = $('html').css('font-size');


		var currentFontSizeNum = parseFloat(currentFontSize);


		var newFontSize = currentFontSizeNum+1;


		if(newFontSize <= 14){


			$('html').css('font-size', newFontSize);


			$.cookie('font_size', newFontSize, {expires:365,path: '/'});
			
			// PB: track the new font size
			if (newFontSize == 10) {
				
				dcsMultiTrack('DCSext.fontsize',fontSmall,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 11) {
				
				dcsMultiTrack('DCSext.fontsize',fontSmaller,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 12) {
			
				dcsMultiTrack('DCSext.fontsize',fontMedium,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 13) {
				
				dcsMultiTrack('DCSext.fontsize',fontBigger,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 14) {
				
				dcsMultiTrack('DCSext.fontsize',fontLarge,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			}			 		
			
		}		

		return false;


	});


	// Decrease Font Size


	$(".decrease").click(function(){


		var currentFontSize = $('html').css('font-size');


		var currentFontSizeNum = parseFloat(currentFontSize);


		var newFontSize = currentFontSizeNum-1;


		if(newFontSize >= 10){


			$('html').css('font-size', newFontSize);


			$.cookie('font_size', newFontSize, {expires:365,path: '/'});

			
			// PB: track the new font size
			if (newFontSize == 10) {
				
				dcsMultiTrack('DCSext.fontsize',fontSmall,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 11) {
				
				dcsMultiTrack('DCSext.fontsize',fontSmaller,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 12) {
			
				dcsMultiTrack('DCSext.fontsize',fontMedium,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 13) {
				
				dcsMultiTrack('DCSext.fontsize',fontBigger,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			} else if (newFontSize == 14) {
				
				dcsMultiTrack('DCSext.fontsize',fontLarge,'DCSext.vhit','1');   // PB: for WebTrends Tracking
				
			}	

		}


		return false;


	});





// ---------------------------------------------------------------------------------------------------


// 				Language chooser: show languages on mouse over


// ---------------------------------------------------------------------------------------------------


	// hide language list onload


	$("#language").addClass("clearfix");


	$("#language ul").hide();


	// show language list on click


	$("#language > a").mouseenter(function(){


		var langList = $(this).parent().children("ul");


		$(langList).show();


		$("#language").mouseleave(function(){


			$(langList).hide();


		})


	});





// ---------------------------------------------------------------------------------------------------


// 				Navigation: show 2nd + 3rd level navigation on mouse over


// ---------------------------------------------------------------------------------------------------


	// add classes to configure fixed width


/*	$("#navigation_wrapper > ul > li:eq(0)").addClass("first");


	$("#navigation_wrapper > ul > li:eq(1)").addClass("second");


	$("#navigation_wrapper > ul > li:eq(2)").addClass("third");


	$("#navigation_wrapper > ul > li:eq(3)").addClass("fourth");


	$("#navigation_wrapper > ul > li:eq(4)").addClass("fifth");*/





	// function to calculate width of layer depending on number of 2nd level lists


	function CalcWidthLayer(count){


		var widthList = 160;


		var widthPaddingLeft = 18;


		var widthPaddingRight = 19;


		var witdhCalculated = (count*widthList)+((count-1)*widthPaddingLeft+((count)*widthPaddingRight));


		return witdhCalculated;


	}





	$("#navigation_wrapper li a.first_level").mouseenter(function(){


		$(this).parent().addClass("open");


		var navLayer = $(this).parent().children(".layer");


		var countNav = $(navLayer).children().length;


		if(countNav > 4){


			countNav = 4;


		}


		layer_width = CalcWidthLayer(countNav)


		$(navLayer).css("width",layer_width+"px");


		if($(navLayer).offset()) {


			if($(navLayer).offset().left - $('#navigation_wrapper').offset().left + layer_width > $('#navigation_wrapper').width()) {


				$(navLayer).addClass("rightside");


				$(navLayer).css("right",$(this).parent().width()-$(this).outerWidth()+"px");


			}


		}


	});


	$('#navigation_wrapper li').mouseleave(function(){


		$(this).removeClass("open");


	});





	onload7();





// ---------------------------------------------------------------------------------------------------


// 				Tables: Show/hide flyout on hovering over icon


// ---------------------------------------------------------------------------------------------------


	$("img.info_icon").each(function(){


		var selectedRow = $(this).parent().parent("tr");


		var widthRow = $(selectedRow).width();


		var firstCell = $(this).parent("td");


		var widthFirstCell = $(firstCell).width() + 2*($(firstCell).css("padding-left").replace(/px/g, ""));


		var widthFlyout = widthRow - widthFirstCell - 20;


		var heightFirstCell = $(firstCell).height() + 1*($(firstCell).css("padding-bottom").replace(/px/g, ""));


		$(selectedRow).find("div.table_flyout").width(widthFlyout + "px").css("top", heightFirstCell+"px");


		$(selectedRow).find("div.table_flyout div.link_box").css("margin-top","-"+heightFirstCell+"px");


		$(selectedRow).find("div.table_flyout h5").css({top: "-"+heightFirstCell+"px", width: widthFlyout+"px", height: heightFirstCell+"px"});


		$(selectedRow).mouseleave(function(){


			$(this).find("td:last-child").removeClass("last-child");


			$(this).removeClass("over");


			$(this).children().children(".info_icon").attr("src","export/system/modules/com.lgt.internet.v1.template/resources/images/icon_open_info.png");


		})


	});





	$("img.info_icon").mouseenter(function(){


		var selectedRow = $(this).parent().parent("tr");


		if(!$(selectedRow).hasClass("over")) {


			$(selectedRow).find("td:last-child").addClass("last-child");


			$(selectedRow).addClass("over");


			$(this).attr("src","export/system/modules/com.lgt.internet.v1.template/resources/images/icon_open_info_active.png");

		}


	}).click(function(e){e.preventDefault();});





// ---------------------------------------------------------------------------------------------------


// 				Print Function


// ---------------------------------------------------------------------------------------------------


	$("a.print").click(function(e){


		e.preventDefault();


		window.print();


	});





// ---------------------------------------------------------------------------------------------------


// 				Forms


// ---------------------------------------------------------------------------------------------------





		setFormProps();


		$('body').delegate("form input[type='text'], form input[type='password'], form textarea","focus",function(){


				$(this).prev().hide();


		});


		$('body').delegate("form input[type='text'], form input[type='password'], form textarea","blur",function(){


				$(this).prev()[!this.value ? "show" : "hide"]();


		});

		
		$('.dcsSearchResults').trigger('click');
		
}


//---------------------------------------------------------------------------------------------------


//	Pulldown: open / close pulldown


//---------------------------------------------------------------------------------------------------


// set the width of the pulldown according to it's content


function onload7() {

	$(".pulldown").each(function() {

		cellPos = $(this).parent().index()

		$(this).parent().parent().parent().parent().find('tr').each(function() {

			$(this).find('td:eq(' + cellPos + ')').addClass("filter_col")

		});

		var listWidth = $(this).children("ul").innerWidth() + 18;

		var linkWidth = $(this).children(".opener").children("a").innerWidth();

		if (listWidth < linkWidth) {

			// listWidth = linkWidth;

		}

		$(this).width(listWidth);

		// $(this).children("ul").width(listWidth);

	});

	// open the pulldown

	$(".pulldown .opener a")
			.click(
					function(e) {

						e.preventDefault();

						// pb: 9.3.2012 improved height calculation for the
						// pulldown opening to the top
						if (!$(this).parent().parent().hasClass("open")) {

							var topPosFooter = $("#footer_wrapper").offset().top;

							var topPosPulldown = $(this).parent().parent()
									.offset().top;

							var heightList = $(this).parent().parent()
									.children("ul").height() + 20;

							if (heightList > (topPosFooter - topPosPulldown)) {

								$(this).parent().parent().children("ul")
										.addClass("totop");

								var topPosHeader = $("#header_wrapper")
										.offset().top;

								var maxHeightHeader = $("#header_wrapper").css(
										"min-height");

								var middleHeader = topPosHeader
										+ (parseInt(maxHeightHeader) / 2);

								if ((heightList - topPosPulldown) > 0) {

									$(this)
											.parent()
											.parent()
											.children("ul")
											.css(
													"max-height",
													(topPosPulldown - middleHeader)
															+ 'px');

								}

							} else {

								$(this).parent().parent().children("ul")
										.removeClass("totop");

							}

							$(this).parent().parent().addClass("open");

						}

					});

	$(".pulldown").mouseleave(function() {

		if ($(this).hasClass("open")) {

			$(this).find("ul").css("max-height", '')

			$(this).removeClass("open");

		}

	});

}







function setFormProps() {


	// add class clearfix to webform_row-divs


	$(".webform_row").addClass("clearfix");


	// add classes to form elements


	$("form input[type='text'], form input[type='password'], form textarea").addClass("text");


	$("form .text").prev("label").addClass("label-inside");


	$("form .text").each(function(){


		// pb: improved handling of labels in forms
		
		if($(this).val() && $(this).val().length > 0 && $(this).val() != 'null') {


			$(this).prev("label").hide();


		} 
		
		if ($(this).val() == 'null') {
			$(this).val('');
		}


	});


}





// ---------------------------------------------------------------------------------------------------


// 				Lightbox: Show/hide content in a pop up


// ---------------------------------------------------------------------------------------------------





function onload1(){


	$('a:[rel="lightbox"]').click(function(){


		lightbox($(this).attr("href"));


		return false;


	});
	
	$('area:[rel="lightbox"]').click(function(){


		lightbox($(this).attr("href"));


		return false;


	});


}





function lightbox(url){


	$('#lightbox_wrap #lightbox_content').html("");


	$('#lightbox_content').css("width","0");


	$('#lightbox_content').css("height","0");


	$('#lightbox_wrap').addClass("lightbox_loading");


	$('#darklayer').show();


//	$('#outer_wrapper').css('margin-top',$(document).scrollTop()*-1)


//	$('#darklayer').height(docHeight).show();


//	$('#restdarklayer').height(docHeight - 107);


	$('body').addClass('printlb');


	$('#lightbox_wrap').show();


	center_lightbox(0,0);


	$.ajax({


		url:url,


		dataType:'html',


		success:function(html_content){

			setLightboxContent(html_content)


		}


	})


}





function setLightboxContent(html_content) {


	$('#lightbox_content').html("");


	$('#lightbox_content').append($(html_content));

	
	$('#lightbox_content > *').addClass("lightbox");


	$('#lightbox_wrap').removeClass("lightbox_loading");


	var lwidth = $('.lightbox').innerWidth();


	var lheight = $('.lightbox').innerHeight();


	center_lightbox(lwidth,lheight);


	$('#outer_wrapper').wrap($('<div/>').attr('id','lb_active_cwraper'));


	setFormProps();


	$("#lightbox_content form").css({visibility:"visible"});


	$("#lightbox_content form").submit(function(){


		$.ajax({


			url:$(this).attr("action"),


			type:$(this).attr("method"),


			data:$(this).serialize(),


			success:function(html_content){


				setLightboxContent(html_content)


			}


		});


		return false;


	});


}





function lightbox_reset_size(oldw,oldh) {


	var lwidth = $('.lightbox').innerWidth();


	var lheight = $('.lightbox').innerHeight();


	if(oldw!=lwidth || oldh!=lheight) {


		center_lightbox(lwidth,lheight)


	}


}





function center_lightbox(lwidth,lheight){


	//ltop = ($(window).height()-lheight)/2;


	lleft = ($(window).width()-lwidth)/2;


	if(lwidth==0 && lheight==0) {


		$('#lightbox_wrap').css({


			top:113,


			left:lleft


		});


			//$(this).css("min-width",$(this).css("width"));


			//$(this).css("width",($(this).innerWidth()*0.0825825825825826)+"em")


		$('#lightbox_content').css({


			width:lwidth,


//			"min-width":lwidth,


			height:lheight


		});


	}


	else {


		$('#lightbox_wrap').animate({


			top:113,


			left:lleft


		},300,function(){


			lightbox_reset_size($(this).width(),$(this).height());


		});


		$('#lightbox_content').animate({


			width:lwidth,


			height:lheight


		},300);


	}


}





function onload2(){


	$('#lightbox_close').click(function(e){


		$('body').removeClass('printlb');


		$('#lightbox_wrap').hide();


		$('#darklayer').hide();


		$('#outer_wrapper').unwrap()


		$('#outer_wrapper').css('margin-top',0)


		return false;


	});


}





function closeLightbox(){


	$('body').removeClass('printlb');


	$('#lightbox_wrap').hide("fast");


	$('#darklayer').hide("fast");


	$('#outer_wrapper').unwrap()


	$('#outer_wrapper').css('margin-top',0)


}





function resizeLightbox() {


	var lwidth = $('.lightbox').innerWidth();


	var lheight = $('.lightbox').innerHeight();


	center_lightbox(lwidth,lheight);


}





// ---------------------------------------------------------------------------------------------------


// 				Tab Navigation


// ---------------------------------------------------------------------------------------------------


function onload3(){


	$('body').delegate('ul.tabs li a','click',function(){


		oldActElement = $(this).parent().parent().find('.active');


		$(oldActElement).removeClass("active");


		oldActElementIndex = $(oldActElement).index();


		$(this).parent().addClass("active");


		actIndex = $(this).parent().index();


		$(this).parent().parent().parent().find('.tab_content:eq('+oldActElementIndex+')').hide().removeClass("active");


		$(this).parent().parent().parent().find('.tab_content:eq('+actIndex+')').fadeIn(300,function(){


			$(this).addClass("active");


			resizeLightbox();


		});


		return false;


	});


}





// ---------------------------------------------------------------------------------------------------


// 				Accorden


// ---------------------------------------------------------------------------------------------------


function onload4(){


	$(".document_container li > a").toggle(function(e){


		$(this).parent("li").addClass("open");


		$(this).parent("li").children(".accordion_content").animate({


			height: "toggle"


		});


		e.preventDefault();


	}, function(){


		$(this).parent("li").removeClass("open");


		$(this).parent("li").children(".accordion_content").animate({


			height: "toggle"


		});


	});


	$(".document_container li:eq(0) > a").trigger("click");


}


// ---------------------------------------------------------------------------------------------------


// 				Style Form Elements (Tofsla Forms)


// ---------------------------------------------------------------------------------------------------


//*********** GLOBAL VARIABLES ***********//


//-- feel free to change these global variables' values to false --//


	var please_StyleSelects = true;


	var please_StyleCheckboxes = true;


	var please_StyleRadios = true;


	var please_CalculateSelectsWidth = true; // If set to "true", automatically calculates selects' inner wrapping widths. Decreases CSS work.


//*********** GLOBAL VARIABLES ***********//


var formControls = {


	"input:radio": [


		 {"nodeType": "container", // sibling, container, child, empty string


		 	"siblingPosition": "", // before, after, empty string


			"nodeTagName": "span",


			"nodeClass": "tfRadioWrapper",


			"nodeRelativeTo": "control"


		 },


		 {"nodeType": "sibling",


		 	"siblingPosition": "before",


			"nodeTagName": "a",


			"nodeClass": "tfRadio",


			"nodeRelativeTo": "control",


			"additionalExec": "polishRadio()",


			"attachEventListener": "listenRadio()"


		 }


	],


	"input:checkbox": [


		 {"nodeType": "container",


		 	"siblingPosition": "",


			"nodeTagName": "span",


			"nodeClass": "tfCheckboxWrapper",


			"nodeRelativeTo": "control"


		 },


		 {"nodeType": "sibling",


		 	"siblingPosition": "before",


			"nodeTagName": "a",


			"nodeClass": "tfCheckbox",


			"nodeRelativeTo": "control",


			"additionalExec": "polishCheckbox()",


			"attachEventListener": "listenCheckbox()"


		 }


	],


	"select": [


		 {"nodeType": "container",


		 	"siblingPosition": "",


			"nodeTagName": "div",


			"nodeClass": "tfSelectWrapper",


			"nodeRelativeTo": "control"


		 },


		 {"nodeType": "child",


		 	"siblingPosition": "",


			"nodeTagName": "div",


			"nodeClass": "",


			"nodeRelativeTo": "previous"			


		 },


		 {"nodeType": "child",


		 	"siblingPosition": "",


			"nodeTagName": "span",


			"nodeClass": "",


			"nodeRelativeTo": "previous"			


		 },


		 {"nodeType": "sibling",


		 	"siblingPosition": "after",


			"nodeTagName": "a",


			"nodeClass": "tfSelectOpen",


			"nodeRelativeTo": "previous"			


		 },


		 {"nodeType": "sibling",


		 	"siblingPosition": "before",


			"nodeTagName": "ul",


			"nodeClass": "",


			"nodeRelativeTo": "control",


			"additionalExec": "polishSelect()",


			"attachEventListener": "listenSelect()"


		 }		 


	]


};


//Executes the function when the DOM is ready to be used.


var resetFomAction = function(){ UpdateCheckedStateAndChoice(); $('input').trigger("blur"); $('textarea').trigger("blur");};


function onload5(){


	// Document is ready


	TofslaFormsStart();


	$("form").css({visibility:"visible"});


	$("input[type=reset]").click(function(){


        window.setTimeout(resetFomAction, 100);


	});


	$("button[type=reset]").click(function(){


        window.setTimeout(resetFomAction, 100);


	});


}


function TofslaFormsStart(){


	if(please_StyleRadios == true)


		StyleControls('input:radio');


	if(please_StyleCheckboxes == true)


		StyleControls('input:checkbox');


	if(please_StyleSelects == true)


		StyleControls("select");


	UpdateDisabledState();


	UpdateCheckedStateAndChoice();


}


var g_previouslyAddedNode;


var g_currentControl;


function StyleControls(controlToFind){


	var controlName;


	if(formControls[controlToFind][0].hasAlias == "yes"){


		controlName = formControls[controlToFind][0].aliasName;	


	}


	else


		controlName = controlToFind;


	var iterateTill;


	$(controlToFind).each(function(index, control){


		iterateTill = formControls[controlName].length;


		if(controlToFind == 'select'){


			if(control.getAttribute('multiple'))


				iterateTill = 0;


		}


		for(var i = 0; i < iterateTill; i++){


			if(IsStylingAllowed($(control))){


				g_currentControl = $(control);


				var nodeTagName = formControls[controlName][i].nodeTagName;


				var nodeClass = formControls[controlName][i].nodeClass;


				var nodeHTML;


				if(nodeClass == "")


					nodeHTML = '<' +  nodeTagName + '></' + nodeTagName +'>';				


				else


					nodeHTML = '<' +  nodeTagName + ' class="' + nodeClass + '"></' + nodeTagName +'>';


				var nodeToManipulate;


				if(formControls[controlName][i].nodeRelativeTo == 'control')


					nodeToManipulate = $(control);


				else{


					nodeToManipulate = $(g_previouslyAddedNode);


				}


				if(formControls[controlName][i].nodeType == 'container'){


					nodeToManipulate.wrap(nodeHTML);


					g_previouslyAddedNode = nodeToManipulate.parent();


				}


				if(formControls[controlName][i].nodeType == 'sibling'){


					if(formControls[controlName][i].siblingPosition == 'before'){


						nodeToManipulate.before(nodeHTML);


						g_previouslyAddedNode = nodeToManipulate.prev();


					}


					if(formControls[controlName][i].siblingPosition == 'after'){


						nodeToManipulate.after(nodeHTML);


						g_previouslyAddedNode = nodeToManipulate.next();


					}


				}


				if(formControls[controlName][i].nodeType == 'child'){


					nodeToManipulate.prepend(nodeHTML);


					g_previouslyAddedNode = nodeToManipulate.children()[0];


				}


				if(i == 0){


					if(controlName.indexOf('button') == -1){


						$(g_previouslyAddedNode).addClass("tofslaControl");


					}


					else


						$(control).addClass("tofslaControl");


				}


				var originalControl;


				if(controlToFind != controlName)


					originalControl = formControls[controlToFind][0];


				else


					originalControl = formControls[controlName][i];					


				if(originalControl.additionalExec){


					var additionalExec = new Function(originalControl.additionalExec);


					additionalExec();


				}


					


				if(originalControl.attachEventListener){


					var attachEventListener = new Function(originalControl.attachEventListener);


					attachEventListener();


				}


				if(originalControl.decorativeClassesAttach){


					var decorativeClassesAttach = new Function(originalControl.decorativeClassesAttach);


					decorativeClassesAttach();


				}


			}//end if


		}//end for


		$(control).addClass("tofslaApplied");


	});//end each


}


function IsStylingAllowed(control){


	if((control.hasClass('tofslaApplied') == false) && (control.css('display') != 'none') && (control.hasClass('dontTofsla') == false))


	return true;


	return false;


}


var g_SelectIndex = 0;


/********************************/


		/* POLISHES */


/********************************/


function polishSelect(){


	var optionsHTML = '';


	RemCurrentSelectWidth();


	g_currentControl.addClass('tfHidden');


	if(g_currentControl.hasClass("error")){


		g_currentControl.parent().addClass("error");


	}


	$(g_currentControl[0].parentNode).css('zIndex', 100-g_SelectIndex);


	g_SelectIndex++;


	$('option', g_currentControl).each(function(index, node){


		optionsHTML	= optionsHTML + '<li><a href="#" index="'+ index +'">' + $(node).html() + '</a></li>';


	});


	var ul = $('ul', g_currentControl.parent())[0];


	$(ul).prepend ($(optionsHTML));


	$(ul).css('display', 'none');


	if(please_CalculateSelectsWidth == true)


		setSelectsCalculatedWidth();


}


function polishRadio(){


	var currentControl = g_currentControl[0];


	var previouslyAddedNode = g_previouslyAddedNode[0];


	previouslyAddedNode.setAttribute('rel', currentControl.name)


}


function polishCheckbox(){


	var currentControl = g_currentControl[0];


}


function RemCurrentSelectWidth(){


	var currentControl = g_currentControl[0];


	RemCurrentSelectWidth.width = currentControl.offsetWidth;


	if(RemCurrentSelectWidth.width == 0){ //equal to 0 when the the form it belongs to is not visible


		RemCurrentSelectWidth.width = parseInt(currentControl.css('width'));


		if(RemCurrentSelectWidth.width == 0){


			RemCurrentSelectWidth.width = 100; //let it be 100 px wide by default


		}


	}


}


function setSelectsCalculatedWidth(){


	var currentControl = g_currentControl[0];


	var mainWrapper = currentControl.parentNode;


	var selectSpan = mainWrapper.childNodes[0].childNodes[0]; // <span>


	var SelectAwidth = parseInt($(mainWrapper.childNodes[0].childNodes[1]).css('width')); // <a>


	var SelectSpanWidth = RemCurrentSelectWidth.width - SelectAwidth - getHorizontalBorderPadding(selectSpan);


	$(mainWrapper).css('width', RemCurrentSelectWidth.width + 'px');


	$(selectSpan).css('width', SelectSpanWidth + 'px');


	var ul = $('ul', mainWrapper);


	ul.css('width', RemCurrentSelectWidth.width - getHorizontalBorderPadding(ul) +2+ 'px');


}


function getHorizontalBorderPadding(node){


	node = $(node);


	var HorizontalBorderPadding;


	var bordL, bordR, padL, padR;


	bordL = 0; bordR = 0; padL = 0; padR = 0;


	var pattern = /[0-9]+/;


	if(IEversion() > -1){ //this is an IE


		if(pattern.test(parseInt(node.css('border-left-width')))){


			bordL = parseInt(node.css('border-left-width'));


		}


		if(pattern.test(parseInt(node.css('border-right-width')))){


			bordR = parseInt(node.css('border-right-width'));


		}


		if(pattern.test(parseInt(node.css('padding-left')))){


			padL = parseInt(node.css('padding-left'));


		}


		if(pattern.test(parseInt(node.css('padding-right')))){


			padR = parseInt(node.css('padding-right'));


		}


		HorizontalBorderPadding = bordL + bordR + padL + padR;


	}


	else{


		HorizontalBorderPadding = parseInt(node.css('border-left-width')) + parseInt(node.css('border-right-width')) + parseInt(node.css('padding-left')) + parseInt(node.css('padding-right'));


	}


		return HorizontalBorderPadding;


}


function UpdateDisabledState(){


	$('.tofslaControl').each(function(index, node){


		if(node.tagName.toLowerCase() != "button"){


			if($('.tofslaApplied', node)[0].disabled)


				$(node).addClass('tfDisabled');


			else


				$(node.parentNode).removeClass('tfDisabled');


		}


		else{


			if(node.disabled)


				$(node).addClass('tfDisabled');


			else


				$(node).removeClass('tfDisabled');


		}


	});


}


function UpdateCheckedStateAndChoice(){


	if(please_StyleSelects == true) resetSelects();


	if(please_StyleCheckboxes == true) resetCheckboxes();


	if(please_StyleRadios == true)	resetRadios();


}


function resetCheckboxes(){


	$('.tfCheckboxWrapper').each(function(index, node){


		var a = node.childNodes[0];


		var input = node.childNodes[1];


		$(a).removeClass('tfChecked');


		if(input.checked)


			$(a).addClass('tfChecked');


	});	


}


function resetRadios(){


	$('.tfRadioWrapper').each(function(index, node){


		var a = node.childNodes[0];


		var input = node.childNodes[1];


		$(a).removeClass('tfChecked');


		$(input).removeClass('tfChecked');


		if(input.checked)


			$(a).addClass('tfChecked');


	});	


}


function resetSelects(){


	var seLect, selIndex, ul, selectLink;


	$('.tfSelectWrapper').each(function(index, node){


		seLect = node.childNodes[2];


		if(!seLect.getAttribute('multiple')){


			selIndex = (seLect.selectedIndex < 0) ? 0 : seLect.selectedIndex;


			ul = node.childNodes[1];


			selectLink = $('a[index="' + selIndex + '"]', ul)[0];


			handleSelectsClick(node, selectLink, seLect, ul);


		}


	});


}


function handleSelectsClick(wrapper, thisLink, seLect, ul){


	if(!thisLink){ // no select options


		return;


	}


	$('span', wrapper)[0].innerHTML = thisLink.innerHTML;


	$('a.selected', wrapper).each(function(i, linky){


		$(linky).removeClass('selected');		


	});


	$(thisLink).addClass('selected');


	$(ul).hide();


	if (seLect.selectedIndex != thisLink.getAttribute('index')){


		seLect.selectedIndex = thisLink.getAttribute('index');


		if(IEversion() > -1){


			var evt = document.createEventObject();


			seLect.fireEvent('onchange', evt)


		}


		else{


			var evt = document.createEvent('HTMLEvents');


			evt.initEvent('change', 'true', 'false');


			seLect.dispatchEvent(evt);


		}


	}


}


function listenCheckbox(){


	var a = g_previouslyAddedNode;


	var checkbox = g_currentControl;


	a.bind("mousedown", function(event){


		this.nextSibling.click();


	});


	checkbox.bind('click', function(event){


		changeVisualCheck(this) 


	});


	var changeVisualCheck = function(check){


		if(!check.disabled){


			if (check.checked){


				$(check.previousSibling).addClass('tfChecked');


			}


			else {


				$(check.previousSibling).removeClass('tfChecked');


			}


		}


	};


}

/**
 * Adds click handler for a checkbox in a lightbox overlay.
 * This function is called onclick event.
 * 
 * @param link the a tag of the checkbox
 * 
 */
function clickOverlayCheckbox(link){
	var a=$(link);
	if (a.hasClass("checkInitialized"))
		return;
	a.addClass("checkInitialized");
	var checkbox=link.nextSibling;
	a.bind("mousedown", function(event){
		this.nextSibling.click();
	});

	$(checkbox).bind('click', function(event){
		changeVisualCheck(this); 
	});
	var changeVisualCheck = function(check){

		if(!check.disabled){
			if (check.checked){
				$(check.previousSibling).addClass('tfChecked');
			} else {
				$(check.previousSibling).removeClass('tfChecked');
			}
		}
	};
	checkbox.click();
	return false;
}


function listenRadio(){


	var radio = g_currentControl;


	var a = g_previouslyAddedNode;


	a.bind("mousedown", function(event){


		this.nextSibling.click();


	});


	radio.bind('click', function(event){


		changeVisualRadio(this) 


	});


	var changeVisualRadio = function(rd){


		if(!rd.disabled){


			/* uncheck all others with the same name */


			$('a[rel="' + rd.getAttribute('name') +'"]').each(function(index, node){


					$(node).removeClass('tfChecked');


			});


			$(rd.previousSibling).addClass('tfChecked');


		}


	};


}


listenSelect.isDocumentListeningEnabled = false;


function listenSelect(){


	var seLect = g_currentControl[0];


	var ul = g_previouslyAddedNode[0];


	var wrapper = g_currentControl[0].parentNode;


	/* Hide the ul and add click handler to the a */


	$('a', ul).each(function(i, linky){


		$(linky).bind('mousedown', function(event){


			handleSelectsClick (wrapper, this, seLect, ul);


		});


		


		if(IEversion() > -1){ // IE


			$(linky).bind('mouseover', function(event){


				$(linky).addClass('hover');


			});


			$(linky).bind('mouseout', function(event){


				$(linky).removeClass('hover');


			});


		}


		$(linky).click(function(){


			return false;


		});


	});


	/* Set the defalut */


	var Link = $('a[index="' + seLect.selectedIndex + '"]', ul)[0];


	handleSelectsClick (wrapper, Link, seLect, ul);


	/* Apply the click handler to the Open */


	$($('a.tfSelectOpen', wrapper)[0]).bind('mousedown', function(event){


		if(!seLect.disabled){


			openOrCloseSelect(wrapper, ul);


		}


	});


	/* Apply one more click handler to the Open */


	$($('div span', wrapper)[0]).bind('mousedown', function(event){


		if(!seLect.disabled)


			openOrCloseSelect(wrapper, ul);


	});


	/* Close Or Open Select */


	var openOrCloseSelect = function(selectWrapper, uL){


		if($(uL).css('display') == 'block') {


			$(uL).css('display', 'none');


		} else{


			$(uL).css('display', 'block'); 


			hideAllOpenSelects(selectWrapper);


		}


	};


	/* Hide all open selects */


	var hideAllOpenSelects = function(nodeToLeaveOpen){


		$('.tfSelectWrapper').each(function(index, node){


			var ulInQuestion = $('ul', node)[0];


			if (($(ulInQuestion).css('display') == 'block') && (node != nodeToLeaveOpen)){


				$(ulInQuestion).parent().parent().parent().css("z-index","20");


				$(ulInQuestion).hide();


			}


		});


	};


	/* Check for an external click */


	var checkExternalClick = function(target){


		var parents = $(target).parents();


		var isChildOfStyledSelect = false;


		parents.each(function(index, node){


			if($(node).hasClass('tfSelectWrapper'))


				isChildOfStyledSelect = true;


		});


		if(isChildOfStyledSelect == false)


			hideAllOpenSelects(document);


	};


	if(!listenSelect.isDocumentListeningEnabled){


		/* Apply document listener */


		$(document).bind("mousedown", function(event){


			checkExternalClick(event.target);	


		});


		listenSelect.isDocumentListeningEnabled = true;


	}


}


function IEversion(){


	var version = navigator.appVersion;


	if(version.indexOf("MSIE") != -1){


		var startCut = version.indexOf("MSIE") + 5;


		var endCut = startCut + 1;


		return version.substring(startCut, endCut); 


	}


	else


		return -1;


}





function onload6(){


	// Document is ready


	$('.tfSelectWrapper').mouseover(function(){


		$(this).closest(".webform_row").css("z-index","25")


	});


	$('.tfSelectWrapper').mouseout(function(){


		if($(this).find('ul:visible').length<=0) {


			$(this).closest(".webform_row").css("z-index","20")


		}


	});


	$(".tfSelectWrapper").closest(".webform_row").css("z-index","20");


	$(".tfSelectWrapper").click(function(){


		if($(this).closest(".webform_row").css("z-index")!="50") {


			$(this).closest(".webform_row").css("z-index","50");


		} else {


			$(this).closest(".webform_row").css("z-index","20");


		}


	});


}

//---------------------------------------------------------------------------------------------------
//	Bild-Fader fuer Bildwechsel auf den UNITs Startseiten
//---------------------------------------------------------------------------------------------------
//jmt -> 11.01.12

function jmaFade(step) {
	step = step || 0;
	document.getElementById("pic2").style.opacity = step/100;
	document.getElementById("pic2").style.filter = "alpha(opacity=" + step + ")"; // IE
	step = step + 1;
	if (step <= 100) {
		window.setTimeout(function () { jmaFade(step); }, 1);
	} else {
		window.setTimeout(function () { jmaFade1(step); }, 5000);
	}
}

function jmaFade1(step) {
	document.getElementById("pic2").style.opacity = step/100;
	document.getElementById("pic2").style.filter = "alpha(opacity=" + step + ")"; // IE
	step = step - 1;
	if (step > 0) {
		window.setTimeout(function () { jmaFade1(step); }, 1);
	} else {
		window.setTimeout(function () { jmaFade(step); }, 10000);
	}
}


function jmaOpenWindow (url,breit,hoch) {
   fenster = window.open(url, "fenster1", "width="+breit+",height="+hoch+",status=yes,scrollbars=yes,resizable=yes");
   fenster.focus();
}

/**
* jma 20.03.2014
* Damit werden "Media Relations" und Client Login (Asia) Links im Kopfbereich in einem neuen Fenster geöffnet die nicht unter lgt.com
* aufgerufen werden. Also lgt.li, lgt.ch etc.
*/
$(document).ready(function(){
        var seite = $("meta[name='DCSext.site']").attr("content");
        if(seite != 'lgt.com' ) {
                $("#meta_second a:contains('Media Relations')").attr('target','_blank');
        }
		
		// Für ASIA Client Login
		$("#meta_second a:contains('Client Login')").attr('target','_blank');
});



/**
* jma 06.03.2015
* Script für Webtrends OptOut Link in der Datenschutzbestimmung
*/

function optoutWebtrends(){
   days=1095; // number of days to keep the cookie
   myDate = new Date();
   myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
   document.cookie = 'WTLOPTOUT=true; path=/; expires=' + myDate.toGMTString();
}
/*           end of cookie function  */



