import { useEffect, useState } from "react"
import axios from "axios";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/MambaQuotes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

console.log(URL)

function Footer() {
  const [quotes, setQuotes] = useState([])
  const [singleQuote, setSingleQuote] = useState('')


  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await axios.get(URL, config)
      setQuotes(res.data.records)
      const quoteLength = res.data.records.length


      const random = Math.floor(Math.random() * quoteLength)
      setSingleQuote(res.data.records[random].fields.Quotes)

    };

    fetchQuotes()
  }, [])

  console.log(quotes)
  return (
    <div className="footer">
      <h1 className="footer-text">{singleQuote}</h1>
    </div>
  )
}

export default Footer;

