var regex = /<span><span class=\"icon\"><\/span>New Issue<\/span><\/a>/g;
var page;
var hits;
var repo;

// Test the text of the body element against our regular expression.
if (regex.test(document.documentElement.innerHTML)) {
  // The regular expression produced a match, so notify the background page.

	// page = document.body.innerHTML;
	page = document.documentElement.innerHTML;
	
	hits = page.match(regex);
	
	for (var i = 0; i < hits.length; i += 1) {
		
	// 	find the repo name i.e. GitHub.repoName = "nodester"
      var re1='(GitHub\\.repoName)';	// Fully Qualified Domain Name 1
      var re2='.*?';	// Non-greedy match on filler
      var re3='((?:[a-z][a-z0-9_]*))';	// Variable Name 1

      var p = new RegExp(re1+re2+re3,["i"]);
      var m = p.exec(page);
      if (m != null)
      {
          var fqdn1=m[1];
          repo=m[2];
      }
		
		
		
	    page = page.replace(hits[i], '<span><span class="icon"></span>New Issue</span></a></li><li class><a href="#" onclick="javascript:window.open(\'http://chats.io/' + repo + '\', \'popup_id\', \'scrollbars,resizable,width=600,height=500\')"  class="minibutton btn-new-issue "><span><span class="icon"></span>Chat</span></a>');
	// console.log('found: ' + trimString(hits[i]))
	}
	
	// document.write (document.doctype + page);
	document.write (page);
	
  	chrome.extension.sendRequest({}, function(response) {});

} else {
  // No match was found.
  // console.log('no matches')
}


//To trim leading or trailing spaces
function trimString (str) {
   // return str.replace(/^\s+/g, '').replace(/\s+$/g, '');  
   return str.replace(/\s+/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\./g, '').replace(/\-/g, '');  
}