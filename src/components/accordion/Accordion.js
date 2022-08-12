import {useState} from "react";

import accordionItems from "./Items";


const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index, value) => {
    if(activeIndex !== index){
      const par = document.createElement("p");
      par.innerHTML = value;
      const elem = document.getElementsByClassName(index)[0];
      elem.appendChild(par);
      if(activeIndex !== null){
        document.getElementsByClassName(activeIndex)[0].childNodes[1].remove();
      }
      setActiveIndex(index);
    } else if(activeIndex === index){
      document.getElementsByClassName(activeIndex)[0].childNodes[1].remove();
      setActiveIndex(null);
    }
  }

  const items = Object.keys(accordionItems).map((key, index) => {
    return <div className={`accordion-item ${index}`}
              onClick={() => {onTitleClick(index, accordionItems[key])}}
              key={index}>
              {Object.keys(accordionItems)[index]}
           </div>;
  });

  return(
    <div className="accordion">
    {items}
    </div>
  );
}


export default Accordion;
