import GrindReports from "./GrindReports"



function ShotHistory() {

  return (
    <div className="shot-hist-div">
      <div className="shot-hist-header-div">
        <h1 className="shot-history-text">Shot History</h1>
        <a href="/NewGrindReport">
          <button className="create-button-text" type="button"><strong>Create</strong></button>
        </a>
      </div>
      <GrindReports />
    </div>
  )
}

export default ShotHistory;