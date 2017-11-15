$('#imageid').hover(function() {
	$(this).attr('src', '${person.value.Photo}');
}, function() {
	$(this).attr('src', '../../../folder/image1.html');
});