import { Link } from "react-router-dom";

function Form(props) {
  return (
    <div>
      <form className="new-grind-report-form" onSubmit={props.handleSubmit}>
        <label className="form-elements form-elements-totals">Date</label>
        <input className="new-grind-report-input-box"
          type="date"
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
        />
        <br />
        <label className="form-elements form-elements-totals">Start Time</label>
        <input className="new-grind-report-input-box"
          type="text"
          value={props.start_Time}
          onChange={(e) => props.setStartTime(e.target.value)}
        />
        <br />
        <label className="form-elements form-elements-totals">End Time</label>
        <input className="new-grind-report-input-box"
          type="text"
          value={props.end_Time}
          onChange={(e) => props.setEndTime(e.target.value)}
        />
        <br />
        <label className="form-elements form-elements-totals">Total Shots Made</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.total_Shots_Made}
          onChange={(e) => props.setTotalShotsMade(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Total Threes Made</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.total_Three_Pointers_Made}
          onChange={(e) => props.setTotalThreePointersMade(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Right Corner</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.right_Corner}
          onChange={(e) => props.setRightCorner(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Left Corner</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.left_Corner}
          onChange={(e) => props.setLeftCorner(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Right Wing</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.rightWing}
          onChange={(e) => props.setRightWing(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Left Wing</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.left_Wing}
          onChange={(e) => props.setLeftWing(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Key</label>
        <input className="new-grind-report-input-box"
          type="number"
          value={props.keyy}
          onChange={(e) => props.setKeyy(e.target.valueAsNumber)}
        />
        <br />
        <label className="form-elements form-elements-totals">Shot Performance</label>
        <input className="new-grind-report-input-box"
          placeholder="Brick Simmons or Chef Curry"
          type="text"
          value={props.shot_Performance}
          onChange={(e) => props.setShotPerformance(e.target.value)}
        />
        <div className="new-form-buttons-div">
          <Link to="/"><button className="new-form-button">{props.cancelButton}</button></Link>
          <button className="new-form-button">{props.saveButton}</button>
        </div>
      </form>
    </div>
  )
}



export default Form;