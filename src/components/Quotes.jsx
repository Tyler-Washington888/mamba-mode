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

function Quotes() {
  const [quotes, setQuotes] = useState([])
  // const [ singleQuote, setSingleQuote] = useState(0)


  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await axios.get(URL, config);
      setQuotes(res.data.records)
    };

    fetchQuotes()
  }, [])
  

  //Takes us to random index in quotes array 
  //  const randomQuote =  Math.floor(Math.random() * uotes.length)
  // setSingleQuote(randomQuote)
return (
    <div>
      <div>
        <ul>
          {quotes.map((quote) => {
            return <li> {quote.fields.Quotes} </li>
      })}
        </ul>
      </div>

    </div>
  )
}

export default Quotes;

