import { useState } from "react"
import BoardPreview from "./BoardPreview"

function DashboardContent() {
  return (
    <div className='dash-content p-1'>
        <h3 className="my_05">View Your Boards</h3>
        <div className="grid-1-1-1 g-1 my_05">
            <BoardPreview title='Work' desc='All work related jobs.' color='red'/>
            <BoardPreview title='Home' desc='Jobs for home.' color='orangered'/>
            <BoardPreview title='Career' desc='Stuff I need to learn.' color='orange'/>
            <BoardPreview title='Finance' desc='Money notes.' color='green'/>
            <BoardPreview title='Car' desc='Cool Cars.' color='teal'/>
        </div>
    </div>
  )
}

export default DashboardContent