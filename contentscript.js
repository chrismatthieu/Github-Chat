var regex = /<span><span class=\"icon\"><\/span>New Issue<\/span><\/a>/g;
var repo;
var user;

// Test the text of the body element against our regular expression.
if (regex.test(document.documentElement.innerHTML)) {
		
	repo = $('a.js-current-repository').html();	
	user = $('a.name').html();	
	
	$('ul.actions').last().append('<li class><a href="#" onclick="javascript:window.open(\'http://voice-chat.nodester.com/rooms/' + repo + '?username=' + user + '\', \'popup_id\', \'scrollbars,resizable,width=1000,height=700\')"  class="minibutton btn-new-issue "><span><span class="icon"></span>Chat</span></a></li>');	
	
  	chrome.extension.sendRequest({}, function(response) {});

} else {
  // No match was found.
  // console.log('no matches')
}



// http://voice-chat.nodester.com/rooms/rubyconf?username=chris