function loadDocumentlist(filename, folder, title, sortcol, sortdir, columns, prefix, thumbnail) {
$.post(filename, { folder: folder, title: title, sortcol: sortcol, sortdir: sortdir, columns: columns, prefix:prefix, thumbnail:thumbnail },
   function(data) {
    $("#"+title).replaceWith(data);
   });   
}





