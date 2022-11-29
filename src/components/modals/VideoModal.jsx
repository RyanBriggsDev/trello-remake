import FuncButton from "../pageStructure/FuncButton"
import whitePlayIcon from '../../assets/icons/play-icon-white.png'
import blackCloseWindow from '../../assets/icons/close-window-black.png'

import { useState } from "react"

function VideoModal() {

  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const onClick = () => setVideoModalOpen(!videoModalOpen)

  return (
    <div className="video-modal-component">
      <div className="video-modal-link">
        <FuncButton btnText='Watch video' func={onClick}/>
        <img onClick={onClick} src={whitePlayIcon} alt="white play icon" />
      </div>
      <div className="video-modal">
        {!videoModalOpen ? '' : 
          <>
            <div className="video-modal-background" onClick={onClick}>
              <div className="video-modal-container">
                <div className="video-modal-content">
                  <div className="modal-close">
                    <img src={blackCloseWindow} alt="black cross, close window" onClick={onClick}/>
                  </div>
                  <div className="video-modal-video">
                  <iframe src="https://www.youtube.com/embed/l3F3l3psqXY"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default VideoModal