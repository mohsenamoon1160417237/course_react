import React, {useState, useRef} from "react";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ColorChanger from "./ColorChanger";
import Counter from "./Counter";
import NavBar from "./navbar/NavBar";
import WikiSearch from "./WikiSearch";
import Translate from "./Translate";
import Route from "./Route";
import Links from "./Links";


import "../css/App.css";


const Main = () => {

  const mainRef = useRef();
  const [images, setImages] = useState([]);

  return (
      <div id="main" ref={mainRef}>

        <NavBar />
        <Links />

        <Route path="/unsplash">
          <>
            <SearchBar setImages={setImages} />
            <p>Found {images.length} images</p>
            <ImageList photos={images} />
            </>
        </Route>

        <Route path="/change-color">
          <ColorChanger mainRef={mainRef}/>
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/wikipedia">
          <WikiSearch />
        </Route>

        <Route path="/translate">
          <Translate />
        </Route>

      </div>
    );
}


export default Main;
