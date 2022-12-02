import Card from "../cards/Card"

function WaysToGrow() {
  return (
    <div className="bg-gray br p-1-5">
        <div className="title my-3">
            <p>POWERFUL WAYS TO GROW</p>
            <h2 className="my-1 font-2_25">Do more with Trello</h2>
            <p className="font-1 w-75">Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
        </div>
        <div className="grid-1-1-1 g-1_5">
            <Card divClass='bg-lgray p-1-5 br' jsx={<>Eggs</>}/>
            <Card divClass='bg-lgray p-1-5 br' jsx={<>Eggs</>}/>
            <Card divClass='bg-lgray p-1-5 br' jsx={<>Eggs</>}/>
        </div>
    </div>
  )
}

export default WaysToGrow