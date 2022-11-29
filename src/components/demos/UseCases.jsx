import UseCaseCard from "../cards/UseCaseCard"

function UseCases() {
  return (
    <div className="grid-1-1-1 g-1">
        <UseCaseCard 
          title='Project Management'
          color='rgb(255, 143, 115)'
          desc='Keep tasks in order, deadlines on track, and team members aligned with Trello.'
        />
        <UseCaseCard 
          title='Brainstorming'
          color='rgb(121, 226, 242)'
          desc='Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.'
        />
        <UseCaseCard 
          title='Meetings'
          color='rgb(121, 242, 192)'
          desc='Empower your team meetings to be more productive, empowering, and dare we say—fun.'
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
        />
        <UseCaseCard 
          title='Editorial Calendar'
          color='rgb(135, 119, 217)'
          desc={`Use Trello as your team’s go-to command center for content curation, revisions, handoff, and publishing.`}
        />
    </div>
  )
}

export default UseCases