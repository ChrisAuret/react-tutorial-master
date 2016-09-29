import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Comment extends Component {
  
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }
  
  render() {
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
}

export default Comment;