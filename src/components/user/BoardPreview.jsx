
function BoardPreview(props) {
  return (
    <div className="board-preview" style={{backgroundColor: `${props.color}`}}>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
    </div>
  )
}

export default BoardPreview

BoardPreview.defaultProps = {
    title: 'title',
    desc: 'desc',
    color: 'rgb(15, 15, 15)'
}