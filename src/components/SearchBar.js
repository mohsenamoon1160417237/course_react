import {useState} from "react";

import unsplash from '../api/unsplash';

import "../css/SearchBar.css";
import "../css/global/small-button.css";



const SearchBar = ({setImages}) => {

  const [query, setQuery] = useState("");

  const getPhotos = async (term, event) => {
    event.preventDefault();
    const response = await unsplash.get("/search/photos", {
      params:{
        query: term
      }
    });

    setImages(response.data.results);
  }

    return(
      <>
      <p className="search-p">Search images</p>
      <form className="unsplash-form" onSubmit={(e) => getPhotos(query, e)}>
        <input
        type="text"
        id="search-input"
        onChange={e => setQuery(e.target.value)}
        />
        <button id="small-button">Search</button>
      </form>
      </>
    );
}

export default SearchBar;
