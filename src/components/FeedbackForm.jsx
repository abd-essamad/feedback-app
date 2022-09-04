import Card from "./shared/Card"
import { useContext, useState , useEffect} from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMesssage] = useState('')
    const {feedbackAdd,feedbackEdit,updateFeedback} =useContext(FeedbackContext)



       useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            
        }
       }, [feedbackEdit])





    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else {
                feedbackAdd(newFeedback)
            }
            
            setText('')
        }
    }

    
    
    const handleTextChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMesssage(null)
        }else if (text!=='' && text.trim().length<=10){
            setMesssage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else {
            setMesssage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
   
  return (
    <Card>
      <form onSubmit={handleSubmit} className="feedback__form">
        <h2>How Would you rate your service with us ?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="feedback__form_input-group">
            <input value={text} onChange={handleTextChange} type="text" placeholder="write a review" />
            <Button  version='secondary' type="submit" isDisabled={btnDisabled}>Send
            </Button>
        </div>
        {message && <div className="feedback__form-message">{message}</div>}
      </form>
    
    </Card>
      
  )
}

export default FeedbackForm
