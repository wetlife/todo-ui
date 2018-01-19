'use strict';

import axios;
testRequest = function() {
  axios.get('google.com')
	.then(function(response) {
		var div =  document.createElement('div');
		var textNode = document.createTextNode('foo');
		div.appendChild(textNode);
		document.body.appendChild(div);
	};
};

//response = axios.get('/
//code goes here
