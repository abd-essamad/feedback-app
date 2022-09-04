import Card from './shared/Card'
import { useContext } from 'react'
import { FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({item, reverse}) {
   const {deleteFeedback,editFeedback} =useContext(FeedbackContext)
  
    return (
    <Card reverse={true}>
        <div className="feedback__item-number">
            {item.rating}
        </div>
        <button onClick={()=>deleteFeedback(item.id)} className={`feedback__item-button ${reverse && 'reverse'}`} >
            X
        </button>
        <button onClick={()=>editFeedback(item)} className='edit'>
              <FaEdit className='edit_icon'/>
        </button>
        <div className="feddback__item-text">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem
