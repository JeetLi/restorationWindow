import React from 'react';
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";


import Home from './/pages/Home/index';

const App = ()=> (
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)

ReactDOM.render(<Home/>,document.getElementById('root') as HTMLElement)