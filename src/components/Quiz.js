import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Quiz = ({ questions, user, onUpdateHouse }) => {
  const [answers, setAnswers] = useState(Array.from({ length: 12 }, () => [0, 0, 0, 0]));
  const history = useHistory();

  const handleOptionChange = (questionIndex, points) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = points;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    const unansweredQuestions = answers.some(answer => answer.every(point => point === 0));
    if (unansweredQuestions) {
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
    const houses = [
      ['Gryffindor', "https://m.media-amazon.com/images/I/81BpIbsbaWL._AC_SX425_.jpg"],
      ['Ravenclaw', "https://m.media-amazon.com/images/I/71oSYjldfjL._AC_SY355_.jpg"],
      ['Hufflepuff', "https://m.media-amazon.com/images/I/81aLUsl0qeL._AC_SY355_.jpg"],
      ['Slytherin', "https://m.media-amazon.com/images/I/71OiL3mUsIL._AC_SX425_.jpg"]
    ];

    const updateHouse = houses[totals.indexOf(maxPoints)];

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user, house: updateHouse[0], houseIcon: updateHouse[1] })
    })
      .then(response => response.json())
      .then(data => {
        onUpdateHouse(updateHouse)
        alert(`You are in ${updateHouse[0]}!`)
        // Reset answers to empty array
        setAnswers(Array(questions.length).fill([0, 0, 0, 0]));
        // Redirect to profile page
        history.push(`/profile/${user.username}`);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };


  function changeIntToLetter(int) {
    if (int === 1) {
      return "One"
    } else if (int === 2) {
      return "Two"
    } else if (int === 3) {
      return "Three"
    } else if (int === 4) {
      return "Four"
    } else if (int === 5) {
      return "Five"
    } else if (int === 6) {
      return "Six"
    } else if (int === 7) {
      return "Seven"
    } else if (int === 8) {
      return "Eight"
    } else if (int === 9) {
      return "Nine"
    } else if (int === 10) {
      return "Ten"
    } else if (int === 11) {
      return "Eleven"
    } else if (int === 12) {
      return "Twelve"
    } else {
    }
  }

  return (
    <div id="quizJS">
      <h1 className='quiz-h1'>Sorting Quiz</h1>
      <img id='quiz-hat' src="https://assets.time.com/interactives/harry_potter_house/img/sorting_hat.png" alt='' />
      {questions.map((question, index) => (
        <div key={question.id}>
          <h2>Question {changeIntToLetter(index + 1)}</h2>
          <p>{question.question}</p>
          {Object.keys(question).filter(key => key.startsWith('option')).map(optionKey => {
            const option = question[optionKey];
            return (
              <div key={optionKey} className='quiz-options'>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  onChange={() => handleOptionChange(index, option.points)}
                />
                <label>{" "}{option.text}</label>
              </div>
            );
          })}
        </div>
      ))}
      <button className='submit-quiz' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;