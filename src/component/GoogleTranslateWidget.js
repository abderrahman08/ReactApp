import React, { useEffect } from 'react';

function GoogleTranslateWidget() {
  useEffect(() => {
    // Load Google Translate script dynamically
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Replace with your website's default language
        includedLanguages: 'en,es,fr,de', // Replace with the languages you want to support
      }, 'google_translate_element');
    };
  }, []);

  return (
    <div id="google_translate_element" />
  );
}

export default GoogleTranslateWidget;
