import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.length == 0){
     return <p>No feedback yet</p>
    }

  return (
    <div>
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
        </motion.div>
      ))}
       </AnimatePresence>
    </div>
  )
}

export default FeedbackList
