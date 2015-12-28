// var React = require('react');
// var ReactDOM = require('react-dom');

define([], function(react, reactDom) {
	var CommentBox = React.createClass({
	  render: function() {
	    return (
	      <div className="commentBox">
	        Hello, world! I am a CommentBox.<br/>
	        <input type='text' placeholder='input something here'/>
	      </div>
	    );
	  }
	});
	
	return CommentBox;
});


// module.exports = CommentBox;