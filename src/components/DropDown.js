import {useState, useEffect, useRef} from 'react';

import '../css/DropDown.css';



const DropDown = ({initialOption, options, setButton, label, setLabel, onSelectClick, value, setValue}) => {

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const dropDownRef = useRef();


  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if(!dropDownRef.current.contains(event.target)){
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    onSelectClick(value);
  }, [value]);

  const renderOptions = options.map((option, index) => {
    if(option.label === label){
      return null;
    }

    return <div
             key={index}
             className={`item ${open ? '': 'hide'}`}
             id={option.value}
             onClick={() => {
               setLabel(option.label);
               setValue(option.value);
             }}>
             {option.label}
           </div>;
  })

  return (
    <div className="drop-down-container">
      {setButton ? <button onClick={() => {setShow(!show)}}>{show ? 'hide' : 'show'} drop down</button> : null}
      <div ref={dropDownRef} className={`drop-down ${show ? '': 'hide'}`} onClick={() => setOpen(!open)}>
        <span>{label === '' ? initialOption : label}</span>
      {renderOptions}
      </div>
    </div>
  );

}

export default DropDown;
