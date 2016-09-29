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

module.exports = Comment;