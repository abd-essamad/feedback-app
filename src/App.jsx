import React from 'react'
import './App.css';
import FeedbackData from './data/FeedbackData'
import './index.css'
import AboutIocnLink from './components/AboutIocnLink';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
 
  return (
    <FeedbackProvider>
    
    <Router>
    
    <Header  />
    <div className='container'>
    <Routes >
      <Route exact path='/' element={
        <>
        <FeedbackForm  />
        <FeedbackStats  />
        <FeedbackList  />
    
        </>
      }>
    </Route>
     
      <Route path='/about'   element={<AboutPage/>}  />
      
     </Routes>
     <AboutIocnLink />
    </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
