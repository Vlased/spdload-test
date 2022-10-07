import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { RecoilRoot } from 'recoil';

const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
a{
  text-decoration: none;
}

.swiper-pagination {
  position: static !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  top: 100px;
}

button {
  cursor: pointer;
  border: none;
}


` 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Global />
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
