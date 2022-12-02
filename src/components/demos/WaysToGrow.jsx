import Card from "../cards/Card"
import ExternalButton from "../pageStructure/ExternalButton"

import intergrationsPuzzle from '../../assets/home/waysToGrow/intergrationsPuzzle.svg'
import butlerAnimation from '../../assets/home/waysToGrow/butlerAnimation.svg'
import trelloEnterprise from '../../assets/home/waysToGrow/trelloEnterprise.svg'

function WaysToGrow() {
  return (
    <div className="bg-gray br p-1-5">
        <div className="title my-3">
            <p>POWERFUL WAYS TO GROW</p>
            <h2 className="my-1 font-2_25">Do more with Trello</h2>
            <p className="font-1 w-75">Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
        </div>
        <div className="grid-1-1-1 g-1_5">
            
        {/* Integrations */}
            <Card divClass='bg-lgray p-1-5 br' contentClass='g-1_5 flex left space-between h-100'
            jsx={
                <>
                    <img src={intergrationsPuzzle} alt="intergrations puzzle" />
                    <div className="my-1">
                        <h3 className="bold">Integrations</h3>
                        <p>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
                    </div>
                    <ExternalButton btnClass='btn-hollow bg-gray' btnText='Browse Intergrations' href='https://trello.com/integrations'/>
                </>
                }
            />

            {/* Butler Automation */}
            <Card divClass='bg-lgray p-1-5 br' contentClass='g-1_5 flex left space-between h-100'
            jsx={
                <>
                    <img src={butlerAnimation} alt="Butler Automation" />
                    <div className="my-1">
                        <h3 className="bold">Butler Automation</h3>
                        <p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                    </div>
                    <ExternalButton btnClass='btn-hollow bg-gray' btnText='Get to know Automation' href='https://trello.com/butler-automation'/>
                </>
                }
            />

            {/* Trello Enterprise */}
            <Card divClass='bg-lgray p-1-5 br' contentClass='g-1_5 flex left space-between h-100'
            jsx={
                <>
                    <img src={trelloEnterprise} alt="Trello Enterprise" />
                    <div className="my-1">
                        <h3 className="bold">Trello Enterprise</h3>
                        <p>The productivity tool teams love, paired with the features and security needed for scale.</p>
                    </div>
                    <ExternalButton btnClass='btn-hollow bg-gray' btnText='Explore Enterprise' href='https://trello.com/enterprise'/>
                </>
                }
            />
        </div>
    </div>
  )
}

export default WaysToGrow