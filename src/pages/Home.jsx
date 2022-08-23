import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { auth } from "../firebase"

function Home() {

  return (
    <div>
      <h1>Trello helps teams move work forward.</h1>
      <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
    </div>
  )

}

export default Home