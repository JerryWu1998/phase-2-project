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

  const commentsByHouse = {
    Gryffindor: [],
    Ravenclaw: [],
    Hufflepuff: [],
    Slytherin: []
  };

  comments.forEach(data => {
    if (commentsByHouse.hasOwnProperty(data.house)) {
      commentsByHouse[data.house].push(data);
    } else {
      console.warn(`House '${data.house}' not found in 'commentsByHouse' object`);
    }
  });

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment, house: user.house, houseIcon:user.houseIcon, byUser: user.username })
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
    <div>
      <h1>Virtual Great Hall</h1>
      <h2>Welcome to the Great Hall, {user.username} of house {user.house}!</h2>
      <h3>Comments:</h3>
      {Object.entries(commentsByHouse).map(([house, houseComments]) => (
        <div key={house}>
          <h4>{house}</h4>
          {houseComments.map(comment => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <img src={`${comment.houseIcon}`} alt=""/>
              <p>{comment.byUser}</p>
              {comment.byUser === user.username &&
                <button onClick={() => handleCommentDelete(comment.id)}>Delete</button>}
            </div>
          ))}
        </div>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <h3>Add a comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default VirtualGreatHall;
