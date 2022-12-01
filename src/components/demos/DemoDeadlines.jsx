import GridCard from "../cards/GridCard"
import ExternalButton from "../pageStructure/ExternalButton"
import InlineLink from "../pageStructure/InlineLink"

import calendarPurple from '../../assets/home/calendarPurple.webp'
import calendarTeal from '../../assets/home/calendarTeal.png'
import timelinesIcon from '../../assets/icons/timelinesIcon.png'
import tealCalendarIcon from '../../assets/icons/tealCalendarIcon.png'

function DemoDeadlines() {
  return (
    <div className="demo-deadlines">
        <div className="title flex center my-3">
            <h2 className="font-2_25">See work in a whole new way</h2>
            <p className="my-1 font-1">View your team’s projects from every angle and bring a fresh perspective to the task at hand.</p>
            <ExternalButton btnClass='btn-trans' btnText='Discover all Trello views' href='https://trello.com/views'/>
        </div>
        <GridCard 
            className='grid-6-4 g-1 my-1 w-100'
            rightClassName='flex center ta-left'
            leftClassName='flex center'
            left={<><img className="w-100" src={calendarPurple} alt="purple calendar" /></>}
            right=
                {
                    <>
                        <div className="flex center-x">
                            <img className="mx-2" src={timelinesIcon} alt="purple timelines icon" width={'32'} height='32'/>
                            <h3 className="mx-2">HIT DEADLINES EVERY TIME</h3>
                        </div>
                        <div className="my-1 px-2">
                            <p>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                            <InlineLink 
                                href='https://trello.com/views/timeline'
                                text='Learn more about Timeline view'
                                className='my-1'
                            />
                        </div>
                    </>
                }
        />
        <GridCard 
            className='grid-4-6 g-1 my-1 w-100'
            leftClassName='flex center ta-left'
            rightClassName='flex center'
            right={<><img className="w-100" src={calendarTeal} alt="purple calendar" /></>}
            left=
                {
                    <>
                        <div className="flex center-x">
                            <img className="mx-2" src={timelinesIcon} alt="purple timelines icon" width={'32'} height='32'/>
                            <h3 className="mx-2">STAY ON TOP OF TASKS</h3>
                        </div>
                        <div className="my-1 px-2">
                            <p>Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
                            <InlineLink 
                                href='https://trello.com/views/calendar'
                                text='Learn more about Calendar view'
                                className='my-1'
                            />
                        </div>
                    </>
                }
        />
    </div>
  )
}

export default DemoDeadlines