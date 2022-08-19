import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
   if(window.confirm('Aer you confirm to delete this item')){
    setFeedback(feedback.filter((item) => item.id !== id))
   }
  }
  const addFeedback = (newFeedback) => { 
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback ]);
   }
  return (
    <>
    <Header />
    <div className="container">
      <FeedbackForm handleAdd = {addFeedback}/>
      <FeedbackStats feedback = {feedback} />
      <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />
    </div>
    </>
  );
}

export default App;
