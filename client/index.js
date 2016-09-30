import React from 'react';
import ReactDOM from 'react-dom';

import CommentBoxContainer from './containers/CommentBoxContainer';

ReactDOM.render(
    <CommentBoxContainer url="http://localhost:3000/api/comments" pollInterval={2000} />,
    document.getElementById('container')
);