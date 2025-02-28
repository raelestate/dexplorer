import React, { useState } from 'react';
import CommentsSection from './CommentSection';

interface ImageModalProps {
  image: {
    title: string;
    src: string;
  } | null;
  onClose: () => void;
}

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  if (!image) return null;

  const handleLike = () => {
    setLikes(prev => liked ? prev - 1 : prev + 1);
    setLiked(!liked);
  };

  const handleAddComment = (newComment: string) => {
    const comment: Comment = {
      id: Date.now(),
      author: 'User',
      text: newComment,
      timestamp: new Date().toLocaleTimeString(),
    };
    setComments(prev => [...prev, comment]);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{image.title}</h2>
        <img src={image.src} alt={image.title} className="modal-image" />
        
        <div className="likes-section">
          <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
            ♥ {likes}
          </button>
        </div>

        <CommentsSection comments={comments} onAddComment={handleAddComment} />
      </div>
    </div>
  );
};

export default ImageModal;