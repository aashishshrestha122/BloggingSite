import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import init from './init';
import { Routing as Routes } from "./routes/Routes";

import './App.css';

init();

function App() {
  return (
    <Provider store={store}>
      <div className="main__panel" >
        <Routes></Routes>
      </div>
    </Provider>
  );
}

export default App;