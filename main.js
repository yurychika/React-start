// var CommentBox = require('./components/react/my-component');
var React = require('react');
var ReactDOM = require('react-dom');


// // console.log(CommentBox);
// // console.log(CommentBox.prototype);
// // console.log(typeof CommentBox);
// // console.log(React);


// ReactDOM.render(
//   <CommentBox/>,
//   document.getElementById('content')
// );


require([
	'./components/react/comment-box'
], function(CommentBox){
	console.log('this is the new shit');
	console.log(CommentBox);
	ReactDOM.render(
		<CommentBox/>,
		document.getElementById('content')
	);
});

