import Header from "../components/pageStructure/Header"
import useSetTitle from "../hooks/useSetTitle"

function NotFound() {

    useSetTitle('404 - Page Not Found')

  return (
    <div className="grid-2-1 g-1_5 not-found">
        <Header 
            title='404 Error'
            titleClassName='font-5'
            desc={`This isn't good. It looks like you're probably lost.`}
            btnText={`Go drunk, you're home.`}
            link='/'
        />
        <iframe src="https://media.tenor.com/xK2AXhBXoE4AAAAd/john-travolta-lost.gif" frameborder="0"></iframe>
    </div>
  )
}

export default NotFound