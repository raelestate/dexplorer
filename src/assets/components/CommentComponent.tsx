import React from 'react';

interface CommentProps {
  author: string;
  text: string;
  timestamp: string;
}

const CommentComponent: React.FC<CommentProps> = ({ author, text, timestamp }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="comment-time">{timestamp}</span>
      </div>
      <p className="comment-text">{text}</p>
    </div>
  );
};

export default CommentComponent;