import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="container">
        <Link 
          to='/portfolioRe' 
          target="_blank" 
          rel="noopener noreferrer">
          RyanBriggs.dev
        </Link>
      </div>
    </footer>
  )
}

export default Footer