import {useState} from "react";

import DropDown from "./DropDown";
import ConvertTranslate from "./ConvertTranslate";



const options = [
  {
    label: "Africaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
];


const Translate = () => {

  const [lang, setLang] = useState('');
  const [text, setText] = useState('');

  return (
    <div className='translate'>
    <label htmlFor="trans-input">Enter a text</label>
      <input name="trans-input" value={text} onChange={(e) => setText(e.target.value)} />
      <DropDown
        options={options}
        setButton={false}
        initialOption='Select a language'
        selected={lang}
        setSelected={setLang}
      />
      <ConvertTranslate text={text} lang={lang} />
    </div>
  );
}


export default Translate;
