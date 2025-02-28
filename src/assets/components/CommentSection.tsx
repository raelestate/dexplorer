import React, { useState } from 'react';
import CommentComponent from './CommentComponent';

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

interface CommentsSectionProps {
  comments: Comment[];
  onAddComment: (newComment: string) => void;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments ({comments.length})</h3>
      <div className="comments-list">
        {comments.map(comment => (
          <CommentComponent
            key={comment.id}
            author={comment.author}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button type="submit" className="comment-button">Post</button>
      </form>
    </div>
  );
};

export default CommentsSection;