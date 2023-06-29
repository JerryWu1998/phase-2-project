import React, { useState, useEffect } from 'react';

function VirtualGreatHall({ user }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:3000/comments');
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error('Error occurred while fetching comments:', error);
      }
    };
    fetchComments();
  }, []);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment === "") {
      window.alert("You cannot post empty comment!")
    } else {
      try {
        const response = await fetch('http://localhost:3000/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ comment: newComment, house: user.house, houseIcon: user.houseIcon, byUser: user.username })
        });
        if (response.ok) {
          const newComment = await response.json();
          setComments([...comments, newComment]);
          setNewComment('');
        }
      } catch (error) {
        console.error('Error occurred while posting comment:', error);
      }
    };
  }

  const handleCommentDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/comments/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setComments(comments.filter((comment) => comment.id !== id));
      }
    } catch (error) {
      console.error('Error occurred while deleting comment:', error);
    }
  };

  return (
    <div id='great-hallJS'>
      <h1>Virtual Great Hall</h1>
      <h2>Welcome to the Great Hall, {user.username} of house {user.house}!</h2>
      <h3>Comments:</h3>

      <div>
        {comments.map(comment => (
          <div key={comment.id} className='comment-container'>
            <div>
              <p className='comment-text'>{comment.comment}</p>
            </div>
            <div className='comment-user'>
              <img className='hall-icons' src={`${comment.houseIcon}`} alt="" />
              <p>{comment.byUser}</p>
            </div>
            {comment.byUser === user.username &&
              <button className='hall-delete' onClick={() => handleCommentDelete(comment.id)}>Delete</button>}
          </div>
        ))}
      </div>
      <form className='hall-form' onSubmit={handleCommentSubmit}>
        <h3>Add a comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
          className='hall-input'
        />
        <p></p>
        <button className='hall-button' type="submit">Submit Comment</button>
      </form>
    </div>

  );
}

export default VirtualGreatHall;