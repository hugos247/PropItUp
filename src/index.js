import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { PersonCard } from './components/PersonCard'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard firstName="Jane" lastName= "Doe" age= { 45 } hairColor="black" />
    <PersonCard firstName="John" lastName= "Smith" age= { 88 } hairColor="brown" />
    <PersonCard firstName="Fillmore" lastName= "Millard" age= { 50 } hairColor="brown" />
    <PersonCard firstName="Maria" lastName= "Smith" age= { 62 } hairColor="brown" /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
