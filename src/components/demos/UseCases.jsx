import UseCaseCard from "../cards/UseCaseCard"

import projectManagement from '../../assets/home/useCases/projectManagement.png'
import Brainstorming from '../../assets/home/useCases/Brainstorming.png'
import Meetings from '../../assets/home/useCases/Meetings.png'
import CRM from '../../assets/home/useCases/CRM.png'
import Calendar from '../../assets/home/useCases/Calendar.png'

function UseCases() {
  return (
    <>
    <div className="flex left title my-1">
      <label className="font-1">TRELLO IN ACTION</label>
      <h2 className="font-2_25">Workflows for any project, big or small</h2>
    </div>
    <div className="grid-1-1-1 g-1">
        <UseCaseCard 
          title='Project Management'
          color='rgb(255, 143, 115)'
          desc='Keep tasks in order, deadlines on track, and team members aligned with Trello.'
          src={projectManagement}
        />
        <UseCaseCard 
          title='Brainstorming'
          color='rgb(121, 226, 242)'
          desc='Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.'
          src={Brainstorming}
        />
        <UseCaseCard 
          title='Meetings'
          color='rgb(121, 242, 192)'
          desc='Empower your team meetings to be more productive, empowering, and dare we say—fun.'
          src={Meetings}
        />
        <UseCaseCard 
          title='Task Management'
          color='rgb(255, 227, 128)'
          desc={`Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.`}
        />
        <UseCaseCard 
          title='CRM'
          color='rgb(0, 199, 229)'
          desc={`Customize your CRM to help your sales team manage their leads and accounts effectively.`}
          src={CRM}
        />
        <UseCaseCard 
          title='Editorial Calendar'
          color='rgb(135, 119, 217)'
          desc={`Use Trello as your team’s go-to command center for content curation, revisions, handoff, and publishing.`}
          src={Calendar}
        />
    </div>
    </>
  )
}

export default UseCases