import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';

const SortingQuiz = ({ user, onUpdateHouse }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/quiz');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          console.error('Failed to fetch questions:', response.status);
        }
      } catch (error) {
        console.error('Error occurred while fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div>
      <Quiz questions={questions} user={user} onUpdateHouse={onUpdateHouse} />
    </div>
  );
};

export default SortingQuiz;
