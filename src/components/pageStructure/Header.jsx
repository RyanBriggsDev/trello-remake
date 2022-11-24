import Button from "./Button"

function Header(props) {
  return (
    <header>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        {props.btnText ? 
          <Button
            btnClass={'btn-primary my_05'}
            btnText={props.btnText}
            link={props.link}
          />
          // <Link to={props.link}><button className="btn btn-primary">{props.btnText}</button></Link> 
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