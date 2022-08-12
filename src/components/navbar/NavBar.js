import {useRef} from "react";

import "../../css/NavBar.css";

import dropDownItems from "./items";



const NavBar = () => {

  const navRef = useRef();
  const navExpandRef = useRef();

  const navUp = () => {
    if(navRef.current.classList.contains("up") === true){
      var itms = document.createElement("div");
      itms.classList.add("drop-down-itms");
      navRef.current.appendChild(itms);

      dropDownItems.forEach((item, i) => {
        var itm = document.createElement("div");
        itm.classList.add("item");
        itm.innerHTML = item;
        itms.appendChild(itm);
      });
      navExpandRef.current.innerHTML = "Compact";

    }else{
      document.querySelector("div.drop-down-itms").remove();
      this.navExpandRef.current.innerHTML = "Expand";
    }
  }

  const onNavClick = () => {

    navRef.current.classList.toggle("up");
    navUp();
  }

    return (
      <div className="navbar" ref={navRef}>
        <div className="headers">
          <span
            onClick={onNavClick}
            className="expand nav-item"
            ref={navExpandRef}
          >Expand</span>
          <span className="nav-item">React Menu</span>
        </div>
      </div>
      );

}

export default NavBar;
