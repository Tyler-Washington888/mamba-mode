import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom"


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/GrindReports`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function GrindReports() {
  const [reports, setReports] = useState([])



  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get(URL, config)
      setReports(res.data.records)

      console.log()

    };

    fetchReports()
  }, [])




  return (
    <div className="grind-report-width-and-height">
      {reports.map(report => {
        return (
          <div key={report.id} className="grind-report-div">
            <div className="grind-report-header-div">
              {/* <h1 className="date-text" className="grind-report-header-text">Date</h1> */}
              <h1 className="shots-made-text" className="grind-report-header-text">Shots Made</h1>
              {/* <h1 className="shot-performance-text" className="grind-report-header-text">Performance</h1> */}
            </div>
            <div className="grind-report-input-div">
              {/* <h1 className="grind-report-input-text">{report.fields.date}</h1> */}
              <h1 className="grind-report-input-text">{report.fields.total_Shots_Made}</h1>
              {/* <h1 className="grind-report-input-text">{report.fields.shot_Performance}</h1> */}
            </div>
            <Link to={`/FullGrindReport/${report.id}`}>
              <button className="full-report-link-button" type="button">{report.fields.date}</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default GrindReports;