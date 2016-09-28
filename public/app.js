
var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false, 
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  handleCommentSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  getInitialState: function() {
    console.log("getInitialState");
    return {data: []};
  },
  
  componentDidMount: function() {
    console.log("componentDidMount");
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    console.log("render");
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});



var CommentList = React.createClass({           
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>      
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});



var CommentForm = React.createClass({
  getInitialState: function(){
    return { author: '', text: '' };
  },
  
  handleAuthorChange: function(e) {
    console.log("author changed");
    this.setState({author: e.target.value});
  },

  handleTextChange: function(e) {
    console.log("text changed");
    this.setState({text: e.target.value});
  },
  
  handleSubmit: function(e) {
  console.log("handleSubmit");
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author){
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  render: function () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        
        <input type="text" 
                placeholder="Your name" 
                value={this.state.author} 
                onChange={this.handleAuthorChange} />
        
        <input type="text" 
                placeholder="Say something" 
                value={this.state.text} 
                onChange={this.handleTextChange} />
        
        <input type="submit" value="Post" />
      
      </form>
    );
  }
});



var Comment = React.createClass({

    rawMarkup: function(){
      var md = new Remarkable();
      var rawMarkup = md.render(this.props.children.toString());
      return { __html: rawMarkup };
    },

  render: function () {
    var md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuther">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);