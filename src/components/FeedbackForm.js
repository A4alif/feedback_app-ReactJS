import React, { useState } from 'react'
import Button from './shared/Button';
import Card from './shared/Card'

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
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
  return (
    <>
      <Card>
        <form>
          <h2>Rate our service</h2>
          {/* rating component */}
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