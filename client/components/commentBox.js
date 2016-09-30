import React, { Component } from 'react';
import axios from'axios';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends Component {

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm onCommentSubmit={this.props.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;