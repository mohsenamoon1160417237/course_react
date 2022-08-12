import {useState, useEffect} from "react";

import wikiApi from "../api/wikipedia";
import WikiResult from "./WikiResult";


const WikiSearch = () => {

  const [wikiWord, setWikiWord] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {

    const makeWikiCall = async () => {
      const { data } = await wikiApi.get("",{
          params:{
          srsearch: wikiWord,
          action: "query",
          list: "search",
          format: "json",
          origin: "*"
        }
      });
      setResults(data.query.search);
    }

    const timeoutId = setTimeout(() => {
      if(wikiWord){
        makeWikiCall();
      }
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [wikiWord]);

  const renderedResults = results.map((result, index) => {
    return <WikiResult
              key={index}
              title={result.title}
              timestamp={result.timestamp}
              snippet={result.snippet}
              pageid={result.pageid}
           />;
  });

  return (
    <div className="wiki-form">
      <label>Enter a word</label>
      <input type="text" className="wiki-input" onChange={(e) => {setWikiWord(e.target.value)}} />
      {renderedResults}
    </div>
  );
}

export default WikiSearch;
