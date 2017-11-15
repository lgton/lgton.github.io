function printRSS(url, elemId, count, moreLabel, fromLabel) {
	var HTML_TEMP = '<div class="newsroom_entry"><h4><a href="$RSS_LINK">$RSS_TITLE</a></h4><p><span class="meta">$RSS_DATE ' + fromLabel + ' $RSS_AUTHOR</span> - $RSS_TEXT <a href="$RSS_LINK">' + moreLabel + '</a></p></div>\n';
	var request = $.ajax({
		url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + count + '&callback=?&q=' + encodeURIComponent(url),
		dataType: 'json',
		success: function(data) {
			var result = '';
			$.each( data.responseData.feed.entries, function( key, item ) {
				var date = new Date(item.publishedDate);
				result += HTML_TEMP.replace('$RSS_LINK', item.link).replace('$RSS_TITLE', item.title).replace('$RSS_DATE', date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()).replace('$RSS_AUTHOR', item.author).replace('$RSS_TEXT', item.contentSnippet).replace('$RSS_LINK', item.link);
			});
			$(elemId).append(result);
		}
	});
}