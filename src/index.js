import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigationbar from './Navigationbar';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Navigationbar />
    <App /> 
    </div>
);