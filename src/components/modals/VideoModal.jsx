import FuncButton from "../pageStructure/FuncButton"

import { useState, useEffect } from "react"

function VideoModal() {

  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const onClick = () => {
    console.log('egg');
  }

  return (
    <>
      <FuncButton btnText='Watch video' func={onClick}/>
        {/* <button onClick={() => console.log('eggs')}>Watch Video</button> */}
    </>
  )
}

export default VideoModal