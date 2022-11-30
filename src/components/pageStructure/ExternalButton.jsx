function ExternalButton(props) {

  return (
    <a className={`btn flex center ${props.btnClass}`} target='_blank noreferrer' href={props.href}>{props.btnText}</a>
  )
}

export default ExternalButton

ExternalButton.defaultProps = {
    btnClass: '',
    href: '/',
    btnText: 'btnText'
}