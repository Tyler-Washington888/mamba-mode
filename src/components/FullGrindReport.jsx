import { useState, useEffect } from "react";
import { useParams } from "react-router";
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

export default function EditGrindReport() {
  const [report, setReport] = useState("")
  const { id } = useParams();


  useEffect(() => {
    const fetchReport = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      setReport(res.data)

      console.log()

    };
    fetchReport()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="full-grind-report-div">
      <h1 className="full-grind-report-title">Full Grind Report</h1>
      <h1 className="full-grind-report-headers">Date</h1>
      <h1 className="full-grind-report-input">{report.fields?.date}</h1>
      <h1 className="full-grind-report-headers">Start Time</h1>
      <h1 className="full-grind-report-input">{report.fields?.start_Time}</h1>
      <h1 className="full-grind-report-headers">End Time</h1>
      <h1 className="full-grind-report-input">{report.fields?.end_Time}</h1>
      <h1 className="full-grind-report-headers">Total Shots Made</h1>
      <h1 className="full-grind-report-input">{report.fields?.total_Shots_Made}</h1>
      <h1 className="full-grind-report-headers">Total Three Pointers Made</h1>
      <h1 className="full-grind-report-input">{report.fields?.total_Three_Pointers_Made}</h1>
      <h1 className="full-grind-report-headers">Right Corner</h1>
      <h1 className="full-grind-report-input">{report.fields?.right_Corner}</h1>
      <h1 className="full-grind-report-headers">Left Corner</h1>
      <h1 className="full-grind-report-input">{report.fields?.left_Corner}</h1>
      <h1 className="full-grind-report-headers">Right Wing</h1>
      <h1 className="full-grind-report-input">{report.fields?.rightWing}</h1>
      <h1 className="full-grind-report-headers">Left Wing</h1>
      <h1 className="full-grind-report-input">{report.fields?.left_Wing}</h1>
      <h1 className="full-grind-report-headers">Key</h1>
      <h1 className="full-grind-report-input">{report.fields?.keyy}</h1>
      <h1 className="full-grind-report-headers">Shot Performance</h1>
      <h1 className="full-grind-report-input">{report.fields?.shot_Performance}</h1>
      <div className="full-grind-report-buttons-div">
        <button className="full-grind-report-buttons"><Link className="full-grind-report-link" to="/">Delete</Link></button>
        <button className="full-grind-report-buttons"><Link className="full-grind-report-link" to={`/EditFullGrindReport/${id}/edit`}>Edit</Link></button>
      </div>

    </div>

  );
}





