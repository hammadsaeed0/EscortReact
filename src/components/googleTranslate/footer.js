import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
      script.async = true;
      document.body.appendChild(script);
    };

    window.loadGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,zh-CN', // English, Hindi, Chinese
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'left', backgroundColor:'red' }}>
      <div id="google_translate_element"></div>
    </footer>
  );
};

export default Footer;
