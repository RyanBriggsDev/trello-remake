import { useEffect } from "react"
import Loading from '../components/Loading'

function PortfolioRedirect() {

    useEffect(() => {
        window.location.replace('https://ryanbriggs.dev')
    })

  return <Loading />
}

export default PortfolioRedirect