// ReactDOM.render(
//   <CommentBox/>,
//   document.getElementById('content')
// );

require(['react/comment-box'], function (CommentBox) {
	console.log('this is the new shit');
	console.log(CommentBox);
	ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
});
