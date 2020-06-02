import React, { useContext, useState } from 'react';

import { languageOptions, dictionaryList } from '../languages/index';

// create the language context with default selected language
export const LanguageContext = React.createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id]
});


// it provides the language context to app
export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage); // it will update the language in state
      setDictionary(dictionaryList[selectedLanguage.id]);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
};


// get text according to id & current language
export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
};