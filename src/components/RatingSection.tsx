import { Star, ThumbsUp, User } from 'lucide-react';
import { useState } from 'react';
import { Comment } from '../types';

interface RatingSectionProps {
  rating: number;
  ratingCount: number;
  comments: Comment[];
  onRate: (rating: number) => void;
  onComment: (text: string, rating: number) => void;
}

export default function RatingSection({ rating, ratingCount, comments, onRate, onComment }: RatingSectionProps) {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
    onRate(rating);
    setShowCommentForm(true);
  };

  const handleSubmitComment = () => {
    if (commentText.trim() && userRating > 0) {
      onComment(commentText, userRating);
      setCommentText('');
      setShowCommentForm(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <h2 className="text-3xl font-bold mb-6">Ratings & Reviews</h2>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div>
            <div className="text-5xl font-bold text-gray-900">{rating.toFixed(1)}</div>
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1">{ratingCount} ratings</div>
          </div>
          
          <div className="flex-1 border-l border-gray-200 pl-6">
            <div className="text-sm font-medium mb-3">Rate this tutorial</div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="rating-star"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoverRating || userRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {showCommentForm && (
          <div className="border-t border-gray-200 pt-6">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your experience with this tutorial..."
              className="w-full border border-gray-300 rounded-lg p-4 text-sm resize-none focus:ring-2 focus:ring-cloudflare-orange focus:border-transparent"
              rows={4}
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleSubmitComment}
                disabled={!commentText.trim()}
                className="bg-cloudflare-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Review
              </button>
              <button
                onClick={() => {
                  setShowCommentForm(false);
                  setCommentText('');
                }}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-box">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {comment.avatar ? (
                  <img src={comment.avatar} alt={comment.author} className="w-12 h-12 rounded-full" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">{comment.author}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= comment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">• {formatDate(comment.date)}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3">{comment.text}</p>
                
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-cloudflare-orange transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({comment.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
