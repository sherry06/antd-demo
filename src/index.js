import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {routes} from './routes';
import { BrowserRouter} from 'react-router-dom';
import { renderRoutes} from 'react-router-config';


import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>),
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
