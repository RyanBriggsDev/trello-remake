import InlineLink from "../pageStructure/InlineLink"

function DemoWorkspaces() {
  return (
    <div className="demo-workspaces">
        <div className="title flex center title">
            <label>Trello 101</label>
            <h3>A productivity powerhouse</h3>
            <p className='w-75'>{`Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in `}<InlineLink href={'https://trello.com/guide'} text={'our guide for getting started.'} /></p>
        </div>
        <div className="demo">
          <div className="boards">boards</div>
          <div className="lists">lists</div>
          <div className="cards">cards</div>
          <div className="demo-image">demo-image</div>
        </div>
    </div>
  )
}

export default DemoWorkspaces