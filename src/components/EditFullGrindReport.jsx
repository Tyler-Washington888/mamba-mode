import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import Form from "./Form"
import axios from "axios";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/GrindReports`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function EditFullGrindReport() {
  const [date, setDate] = useState("")
  const [start_Time, setStartTime] = useState("")
  const [end_Time, setEndTime] = useState("")
  const [total_Shots_Made, setTotalShotsMade] = useState("")
  const [total_Three_Pointers_Made, setTotalThreePointersMade] = useState("")
  const [right_Corner, setRightCorner] = useState("")
  const [left_Corner, setLeftCorner] = useState("")
  const [right_Wing, setRightWing] = useState("")
  const [left_Wing, setLeftWing] = useState("")
  const [keyy, setKeyy] = useState("")
  const [shot_Performance, setShotPerformance] = useState("")
  const [comments, setComments] = useState("")

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchReport = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      const { fields } = res.data;
      setDate(fields.date)
      setStartTime(fields.start_Time)
      setEndTime(fields.end_Time)
      setTotalShotsMade(fields.total_Shots_Made)
      setTotalThreePointersMade(fields.total_Three_Pointers_Made)
      setRightCorner(fields.right_Corner)
      setLeftCorner(fields.left_Corner)
      setRightWing(fields.right_Wing)
      setLeftWing(fields.left_Wing)
      setKeyy(fields.keyy)
      setShotPerformance(fields.shot_Performance)
      setComments(fields.comments)
    };

    fetchReport();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      date,
      start_Time,
      end_Time,
      total_Shots_Made,
      total_Three_Pointers_Made,
      right_Corner,
      left_Corner,
      right_Wing,
      left_Wing,
      keyy,
      shot_Performance,
      comments,

    };

    const res = await axios.put(`${URL}/${id}`, { fields }, config);
    history.push("/");
  };

  return (
    <div className="new-grind-report-div">
      <h1 className="new-grind-report-title">Edit Grind Report</h1>
      <Form
        date={date}
        setDate={setDate}
        start_Time={start_Time}
        setStartTime={setStartTime}
        end_Time={end_Time}
        setEndTime={setEndTime}
        total_Shots_Made={total_Shots_Made}
        setTotalShotsMade={setTotalShotsMade}
        total_Three_Pointers_Made={total_Three_Pointers_Made}
        setTotalThreePointersMade={setTotalThreePointersMade}
        right_Corner={right_Corner}
        setRightCorner={setRightCorner}
        left_Corner={left_Corner}
        setLeftCorner={setLeftCorner}
        right_Wing={right_Wing}
        setRightWing={setRightWing}
        left_Wing={left_Wing}
        setLeftWing={setLeftWing}
        keyy={keyy}
        setKeyy={setKeyy}
        shot_Performance={shot_Performance}
        setShotPerformance={setShotPerformance}
        handleSubmit={handleSubmit}
        saveButton={"Save"}
        cancelButton={"Cancel"}
      />
    </div>
  )

}

export default EditFullGrindReport;