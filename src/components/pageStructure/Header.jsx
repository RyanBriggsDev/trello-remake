import Button from "./Button"

function Header(props) {
  return (
    <header>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        {props.btnText ? 
          <Button
            btnClass={'btn-primary'}
            btnText={props.btnText}
            link={props.link}
          />
        :
          ""
        }
    </header>
  )
}

export default Header

Header.defaultProps = {
  title: 'title',
  desc: 'desc',
  btnText: '',
  link: '/'
}