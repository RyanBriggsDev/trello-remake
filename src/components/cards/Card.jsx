function Card(props) {
  return (
    <div className={`card ${props.divClass}`}>
        <div className={`card-content ${props.contentClass}`}>
            {props.jsx}
        </div>
    </div>
  )
}

export default Card

Card.defaultProps = {
    divClass: '',
    contentClass: '',
    jsx: <></>,
}