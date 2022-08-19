import React, { useState } from 'react'
import Rating from './Rating';
import Button from './shared/Button';
import Card from './shared/Card'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const inputHandler = (e) => { 
    setText(e.target.value);
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } 
    else if (text!=='' && text.trim().length <=10) {
      setBtnDisabled(true)
      setMessage("You need to enter 10 character ")
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    
   }

   const formHandler = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    }
    handleAdd(newFeedback);
    setText('');

   }
  return (
    <>
      <Card>
        <form onSubmit={formHandler}>
          <h2>Rate our service</h2>
          <Rating select = {(rating) => setRating(rating)} />
          <div className="input-group">
            <input value={text} onChange={inputHandler} type="text" placeholder='Enter your Review here' />
            <Button type="submit" version='secondary' isDisabled={btnDisabled} >Send</Button>
          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    </>
  )
}

export default FeedbackForm