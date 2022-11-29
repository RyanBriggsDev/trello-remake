function FuncButton(props) {

  return (
    <button className={`btn ${props.btnClass}`} onClick={props.func}>{props.btnText}</button>
  )
  
}

export default FuncButton

FuncButton.defaultProps = {
    btnClass: '',
    link: '/',
    btnText: 'btnText',
    func: ''
}