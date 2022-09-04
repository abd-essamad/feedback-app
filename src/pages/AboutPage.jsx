import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"
function AboutPage() {
  
  return (
       <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback
            for a product or a service
        </p>
        <p>version: 1.0.0</p>

        <Link to='/'>
            Back to home
        </Link>
        
       </div>

  )
}

export default AboutPage
