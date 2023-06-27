import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Quiz = ({ questions, user, onUpdateHouse }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill([0, 0, 0, 0]));
  const history = useHistory();

  const handleOptionChange = (questionIndex, points) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = points;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    if (answers.some(answer => answer.every(point => point === 0))) {
      alert('You need to answer all questions!');
      return;
    }

    const totals = [0, 0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < 4; j++) {
        totals[j] += answers[i][j];
      }
    }

    const maxPoints = Math.max(...totals);
    const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
    const house = houses[totals.indexOf(maxPoints)];

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user, house })
    })
      .then(response => response.json())
      .then(data => {
        onUpdateHouse(house);
        alert(`You are in ${house}!`);
        // Reset answers to empty array
        setAnswers(Array(questions.length).fill([0, 0, 0, 0])); 
        // Redirect to profile page
        history.push(`/profile/${user.username}`); 
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((question, index) => (
        <div key={question.id}>
          <h2>Question {index + 1}</h2>
          <p>{question.question}</p>
          {Object.keys(question).filter(key => key.startsWith('option')).map(optionKey => {
            const option = question[optionKey];
            return (
              <div key={optionKey}>
                <input 
                  type="radio" 
                  name={`question-${question.id}`} 
                  onChange={() => handleOptionChange(index, option.points)}
                />
                <label>{option.text}</label>
              </div>
            );
          })}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
