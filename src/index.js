import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Footer from './Footer';
import Car from './Car';
import reportWebVitals from './reportWebVitals';
import Apiget from './Apiget';
import Apipost from './Apipost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <About /> */}
    {/* <Footer /> */}
    {/* <Apiget /> */}
    <Apipost />
    {/* <Car name='PQR' /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
