

function InlineLink(props) {
  return (
    <a className={`inline-link ${props.className}`} href={props.href} target={props.target}>{props.text}</a>
  )
}

export default InlineLink

InlineLink.defaultProps = {
  target: "_blank noreferrer"
}