import InlineLink from "../pageStructure/InlineLink"

import { useState } from "react"

// images
import Boards from '../../assets/home/demoWorkspaces/demoBoards.webp'
import Lists from '../../assets/home/demoWorkspaces/demoLists.webp'
import Cards from '../../assets/home/demoWorkspaces/demoCards.webp'

function DemoWorkspaces() {


  const [selected, setSelected] = useState('boards')

  return (
    <div className="demo-workspaces">
        <div className="flex center title">
            <label>TRELLO 101</label>
            <h2>A productivity powerhouse</h2>
            <p className='w-75'>{`Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in `}<InlineLink href={'https://trello.com/guide'} text={'our guide for getting started.'} /></p>
        </div>
        <div className="demo my_05">
          <div onClick={() => setSelected('boards')} className={`demo-workplace-buttons boards ${selected === 'boards' ? 'selected' : ''}`}>
            <h3>Boards</h3>
            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
          </div>
          <div onClick={() => setSelected('lists')}  className={`demo-workplace-buttons lists ${selected === 'lists' ? 'selected' : ''}`}>
            <h3>Lists</h3>
            <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
          </div>
          <div onClick={() => setSelected('cards')}  className={`demo-workplace-buttons cards ${selected === 'cards' ? 'selected' : ''}`}>
            <h3>Cards</h3>
            <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
          </div>
          <div className="demo-image flex center">
            <img src={selected === 'boards' ? Boards : selected === 'lists' ? Lists : selected === 'cards' ? Cards : ''} alt="demo image" />
          </div>
        </div>
    </div>
  )
}

export default DemoWorkspaces