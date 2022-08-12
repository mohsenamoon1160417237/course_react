import {useRef, useState} from "react";

import DropDown from "./DropDown";


const ColorChanger = (props) => {

  const [label, setLabel] = useState('')
  const [color, setColor] = useState('');

  const options = [
    {label: 'The color Red',
     value: 'red'},
    {label: 'The color Green',
     value: 'green'},
    {label: 'The color Pink',
     value: 'pink'},
    {label: 'The color Brown',
     value: 'brown'},
    {label: 'The color White',
     value: 'white'} 
  ];

  const OnSelectClick = (color) => {

    const main = props.mainRef.current;

    main.style.backgroundColor = color;

  }

    return(
      <div className="color-changer">

        <DropDown
          options={options}
          setButton={true}
          initialOption='Select a color'
          label={label}
          setLabel={setLabel}
          onSelectClick={OnSelectClick}
          value={color}
          setValue={setColor}
        />

      </div>
    );

}

export default ColorChanger;
