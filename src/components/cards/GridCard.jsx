

function GridCard(props) {
  return (
    <div className={`grid-card ${props.className}`}>
        <div className={`content-left ${props.leftClassName}`}>{props.left}</div>
        <div className={`content-right ${props.rightClassName}`}>{props.right}</div>
    </div>
  )
}

export default GridCard

GridCard.defaultProps = {
    left: <><h3>We can have a title</h3><p>And also a paragraph</p></>,
    right: <><h3>Right title</h3><p>Right paragraph</p></>,
    className: 'grid-4-6 g-1',
    rightClassName: '',
    leftClassName: ''
}