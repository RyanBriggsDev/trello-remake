import { useNavigate } from "react-router-dom"

function Button(props) {

    const navigate = useNavigate()

  return (
    <button className={`btn ${props.btnClass}`} onClick={() => navigate(props.link)}>{props.btnText}</button>
  )
}

export default Button

Button.defaultProps = {
    btnClass: '',
    link: '/',
    btnText: 'btnText'
}