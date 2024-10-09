import React, { useState } from 'react'

const Quiz = () => {

 const questions  = [
    {question : "is react a javscript library", answer : 'Yes'},
    {question : "is JSx is programming language", answer : 'No'}
 ];
  const[userAnswers, setUserAnswers] = useState([]);
  const[score, setScore] = useState(null);

 const handleAnswer =(index,answer) => {
    const updateAnswers = [...userAnswers];
    updateAnswers[index] = answer;
    setUserAnswers(updateAnswers);
 }
 
 const calculatescore = () =>{
    const correctAnswers = questions.filter((q, index) => q.answer === userAnswers[index]).length;
    setScore(correctAnswers);
 }

  return (
    <div>
        <h1 className='text-xl font-bold text-center mb-8'>Sample quiz</h1>
        {questions.map((q,index) => (
            <div key={index} className='mb-4'>
            <p className='font-semibold'> {q.question}</p>
            {/* <button onClick={() => handleAnswer(index, true)}>true</button>
            <button onClick={() => handleAnswer(index, false)}> false</button> */}
            <div className='flex justify-center mt-5'>
            <label> 
                <input
                type='radio'
                name = {`question- ${index}`}
                value="Yes"
                checked = {userAnswers[index] === 'Yes'}
                onChange={() => handleAnswer(index, 'Yes')}
                className='mr-2'
                />
                Yes
                
            </label>
            <label> 
                <input
                type='radio'
                name = {`question- ${index}`}
                value="Yes"
                checked = {userAnswers[index] === 'No'}
                onChange={() => handleAnswer(index, 'No')}
                className='ml-10  mr-2'
                />
                No
                
            </label>
            </div>
            </div>
        ))}
        <button onClick={calculatescore} className='bg-blue-400  text-white p-2 rounded hover:bg-blue-700'> Submit</button>
        {score !== null && <h2 className='mt-5 text-center text-lg'> Your score : {score}/{questions.length}</h2>}
    </div>
  )
}

export default Quiz