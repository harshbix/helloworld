import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import TranslatorBtns from './components/translators';

ReactDOM.render(
  <React.StrictMode>
    <TranslatorBtns />
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
