import React from 'react'
import './App.css';
import FeedbackData from './data/FeedbackData'
import './index.css'
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import { useState } from 'react';
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  function deleteFeedback(id) {
      if(window.confirm('Are you sure you want to delete ?')){
        setFeedback(feedback.filter(item =>item.id!==id))
      }
  }

  const feedbackAdd = (newFeedback)=>{
      newFeedback.id= (Math.random() * newFeedback.text.length).toFixed(0) + newFeedback.text.length
      setFeedback([...feedback,newFeedback])
  }
  
  return (
    <>
    <Header  />
    <div className='container'>
    <FeedbackForm addFeedback={feedbackAdd} />
    <FeedbackStats feedback={feedback} />
    <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
    </div>
    </>
  )
}

export default App
