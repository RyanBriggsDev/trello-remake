import Header from "../../components/pageStructure/Header"

function Register() {
  return (
    <>
        <Header
            title={'User Registration'}
            desc={'Register for a free account.'}
            btnText={'Already have an account? Login.'}
            link={'/auth/login'}
        />
    </>
  )
}

export default Register