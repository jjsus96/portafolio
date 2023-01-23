import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigationbar from './Navigationbar';
import App from './App';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='general'>
    <Navigationbar />
    <App />
    <About /> 
    </div>
);