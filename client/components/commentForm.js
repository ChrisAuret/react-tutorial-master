import React, { Component } from 'react';

class CommentForm extends Component{

  render() {

    return (

      <form className="commentForm" onSubmit={this.props.handleSubmit}>      
        <input type="text" 
                placeholder="Your name" 
                value={this.props.author} 
                onChange={this.props.handleAuthorChange} />
        <input type="text" 
                placeholder="Say something" 
                value={this.props.text}
                onChange={this.props.handleTextChange} />      
        <input type="submit" value="Post" />    
      </form>
      
    );

  }
}

export default CommentForm;