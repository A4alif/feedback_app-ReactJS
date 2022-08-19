import { useState } from "react";
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
  return (
    <>
    <Header />
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedback = {feedback} />
      <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />
    </div>
    </>
  );
}

export default App;
