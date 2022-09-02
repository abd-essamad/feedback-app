import Card from './shared/Card'
function FeedbackItem({item, reverse, handleDelete}) {
   
  
    return (
    <Card reverse={true}>
        <div className="feedback__item-number">
            {item.rating}
        </div>
        <button onClick={()=>handleDelete(item.id)} className={`feedback__item-button ${reverse && 'reverse'}`} >
            X
        </button>
        <div className="feddback__item-text">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem
