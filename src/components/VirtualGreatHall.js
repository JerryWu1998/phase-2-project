import React, { useState, useEffect } from 'react';

function VirtualGreatHall({ user }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (response.ok) {
          const data = await response.json();
          setComments(data.map(user => ({
            house: user.house,
            comments: user.comments
          })));
        }
      } catch (error) {
        console.error('Error occurred:', error);
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
    commentsByHouse[data.house].push(data.comments);
  });

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
          comments: [...user.comments, newComment],
        }),
      });
      if (response.ok) {
        setComments((prevComments) => [
          ...prevComments,
          { house: user.house, comments: [newComment] },
        ]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <h1>Virtual Great Hall</h1>
      <h2>Welcome to the Great Hall, {user.username}!</h2>
      <h3>Comments:</h3>
      {Object.entries(commentsByHouse).map(([house, houseComments]) => (
        <div key={house}>
          <h4>{house}</h4>
          {houseComments.map((comments, index) => (
            <div key={index}>
              {comments.map((comment, commentIndex) => (
                <p key={commentIndex}>{comment}</p>
              ))}
            </div>
          ))}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VirtualGreatHall;
