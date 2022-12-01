import ExternalButton from "../pageStructure/ExternalButton"

function DemoDeadlines() {
  return (
    <div className="demo-deadlines">
        <div className="title flex center my-3">
            <h2 className="font-2_25">See work in a whole new way</h2>
            <p className="my-1 font-1">View your team’s projects from every angle and bring a fresh perspective to the task at hand.</p>
            <ExternalButton btnClass='btn-trans' btnText='Discover all Trello views' href='https://trello.com/views'/>
        </div>
    </div>
  )
}

export default DemoDeadlines