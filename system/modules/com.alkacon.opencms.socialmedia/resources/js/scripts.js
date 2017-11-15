/**
 * Calls the Facebook login page.
 * 
 */
function callFacebookLogin() {
	// build the link
	// the title parameter in the link is not necessary, because facebook gets the title from the requested site itself 
	var link = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(document.URL);
	window.open(link);
}

/**
 * Calls the Twitter login page
 *
 * @param title page title
 *
 *
*/
function callTwitterLogin(title) {
	var source = document.URL;
	// remove all before a double slash string in the URL inclusive the double slash itself
	var doubleSlashPos = source.indexOf("//");
	if (doubleSlashPos > -1) {
		source = source.substring(doubleSlashPos + 2);
	}
	// remove a leading www.
	var slashWww = source.indexOf("www.");
	if (slashWww > -1) {
		source = source.substring(4);
	}
	// remove all after the first slash inclusive the slash itself
	var slashPos = source.indexOf("index.html");
	if (slashPos > -1) {
		source = source.substring(0, slashPos);
	}
	// build the link
	var link = "http://twitter.com/home?source=" + encodeURIComponent(source) + "&status=" + encodeURIComponent(title) + " " + encodeURIComponent(document.URL) + " via @LGT_Group";
	window.open(link);	
}

/**
 * Calls the google+ login page.
 *  
 * @param locale the request context locale
 */
function callGooglePlus(locale) {	
	var link = "https://plus.google.com/share?url=" + encodeURIComponent(document.URL) + "&hl=" + encodeURIComponent(locale);
	window.open(link);
}

/**
 * Calls the Xing login page.
 * 
 */
function callXing(title) {
	// build the link
	// the title parameter in the link is not necessary, because facebook gets the title from the requested site itself 
	var link = "https://www.xing.com/app/user?op=share;url=" + encodeURIComponent(document.URL); + ";title="+ encodeURIComponent(title);
	window.open(link);
}

/**
 * Calls the LinkedIn login page.
 * 
 */
function callLinkedIn(title) {
	// build the link
	var link = "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL); + "&title="+ encodeURIComponent(title);
	window.open(link);
}
