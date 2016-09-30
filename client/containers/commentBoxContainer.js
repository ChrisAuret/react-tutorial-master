import React, { Component } from 'react';
import axios from'axios';
import CommentBox from '../components/commentBox';

class CommentBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then( response => {
        this.setState({ data: response.data});
      })
      .catch(error => {
        console.log(this.props.url, error);
      });
  }

  handleCommentSubmit  (comment) {
    
    console.log(this.state);

    var comments = this.state.data;

    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({date: newComments});

    axios.post(this.props.url, { data: comment })
      .then(response => {
        this.setState({data: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount () {
    this.loadCommentsFromServer();
  }

  render() {
    return( <CommentBox data={this.state.data} handleCommentSubmit={this.handleCommentSubmit.bind(this)} /> )
  }
}

export default CommentBoxContainer;