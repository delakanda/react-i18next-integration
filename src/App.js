import './App.css';
import { Button, SelectPicker } from 'rsuite';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const [selectedLang, setSelectedLang] = useState('en')

  const { t, i18n } = useTranslation(); 

  const changeLang = useCallback(
    (data) => {
      setSelectedLang(data);
      i18n.changeLanguage(data);
    },
    [i18n],
  )

  return (
    <div className="App">

      <SelectPicker data={[
        {
          "label": "English",
          "value": "en",
        },
        {
          "label": "French",
          "value": "fr",
        },
      ]}
      value={selectedLang} 
      onChange={changeLang}
      style={{ width: 224, marginTop: '100px', marginBottom: '100px' }} />

      <br/>

      {t('test.displayText')}

      <br/>
      <br/>
      <Button appearance="ghost"> {t('buttonTexts.hello')} </Button>
      
    </div>
  );
}

export default App;
