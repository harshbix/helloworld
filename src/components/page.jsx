import React, { useState, useEffect } from 'react';
import english from './dictionaries/en.json';
import spanish from './dictionaries/es.json';

function Page() {
  const [translate, setTranslate] = useState({ hello: { title: '', text: '' } });

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.endsWith('/en')) {
      setTranslate(english);
    } else if (currentUrl.endsWith('/es')) {
      setTranslate(spanish);
    }
  }, []);

  return (
    <div className="d-flex align-content-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bolder">{translate.hello.title}</h1>
        <p className="lead fw-bold text-muted">{translate.hello.text}</p>
      </div>
    </div>
  );
}

export default Page;
