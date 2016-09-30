import React, { Component } from 'react';
import axios from'axios';
import CommentList from './commentList';
import CommentFormContainer from '../containers/commentFormContainer';

class CommentBox extends Component {

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentFormContainer onCommentSubmit={this.props.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;