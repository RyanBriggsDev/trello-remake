import { useEffect } from "react"

function useSetTitle(title) {

  useEffect(() => {
    document.title = `${title} | Trello Remake`
 }, [title]);

  return (
    <></>
  )
}

export default useSetTitle