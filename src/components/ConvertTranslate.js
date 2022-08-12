import {useState, useEffect} from "react";

import googleTranslateAPi from '../api/googleTranslate';

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM : google translate api key


const ConvertTranslate = ({text, lang}) => {

  const [result, setResult] = useState('');

  useEffect(() => {

    if(text === '' || lang === null){
      return;
    }
    const makeTranslateCall = async () => {
      const {data} =  await googleTranslateAPi.post("language/translate/v2", {}, {
        params: {
          q: text,
          target: lang.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      console.log(data);

    }

    makeTranslateCall();

  }, [text, lang]);

  return (
    <div className='trans-result'>
      {result === '' ? null : result}
    </div>
  );

}

export default ConvertTranslate;
