import Header from "../../components/pageStructure/Header"

function Login() {
  return (
    <>
        <Header 
            title='User Login'
            desc='Log in to your account to get started.'
            btnText='Need an account? Register for free.'
            link='/auth/register'
        />
    </>
  )
}

export default Login