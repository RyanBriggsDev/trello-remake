import { useState } from "react"
import BoardPreview from "./BoardPreview"

function DashboardContent() {
  return (
    <div className='dash-content p-1'>
        <h3>View Your Boards</h3>
        <BoardPreview />
    </div>
  )
}

export default DashboardContent