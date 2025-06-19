import { useState } from 'react';
import { useEffect } from 'react';
import './App.module.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
// import ClickCounter from "../ClickCounter/ClickCounter.jsx";

export default function App() {
  const [states, setState] = useState(
    () => { 
      const statesSaved = localStorage.getItem('states');
      if (statesSaved.good !== null) { return JSON.parse(statesSaved); } else {setState({ good: 0, neutral: 0, bad: 0 })} 
    }
  );     
  const updateFeedback = feedbackType => {   
    if (feedbackType === 'reset')
      { return (setState({ good: 0, neutral: 0, bad: 0 })); }
    setState({...states, [feedbackType]: states[feedbackType] + 1});
  }

  useEffect(() => { localStorage.setItem('states', JSON.stringify(states)) }, [states])

  const totalFeedback = states.good + states.neutral + states.bad;
  const positiveFeedback = Math.round((states.good / totalFeedback) * 100);

  return (
    <>
      < Description />
      < Options onUpdate={updateFeedback} totalFeedback={totalFeedback} /> 
      { totalFeedback
          ? (<Feedback states={states} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) 
          : (<Notification text='No feedback yet' />)
      }
    </>
  )
}