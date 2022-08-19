import React from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

const FeedbackItem = ({item}) => {
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display"> {item.text}</div>
      </Card>
    </>
  )
}

export default FeedbackItem