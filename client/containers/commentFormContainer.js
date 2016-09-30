import React, { Component } from 'react';
import CommentForm from '../components/commentForm';

class CommentFormContainer extends Component{

  constructor(props) {
    super(props);   
    this.state = {
      author: '', 
      text: ''
    };
  }
  
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author){
      return;
    }
    this.props.onCommentSubmit({author: author, text: text}); // callback to parent.
    this.setState({author: '', text: ''});
  }

  render() {
    return (

      <CommentForm 
        author={this.state.author}
        text={this.state.text}
        handleAuthorChange={this.handleAuthorChange.bind(this)}
        handleTextChange={this.handleTextChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
      />

    )
  }
}

export default CommentFormContainer;