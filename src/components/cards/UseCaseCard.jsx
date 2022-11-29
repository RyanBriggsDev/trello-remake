import taskManagement from '../../assets/home/useCases/taskManagement.png'

function UseCaseCard(props) {
  return (
    <div className="use-case-card">
        <div className="use-card-card-color" style={{backgroundColor: props.color}}>
            <img src={props.src} alt={props.title} />
        </div>
        <div className="use-case-card-content">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default UseCaseCard

UseCaseCard.defaultProps = {
    color: 'rgb(255, 227, 128)',
    src: taskManagement,
    title: 'title',
    desc: 'desc'
}