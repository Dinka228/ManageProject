import React from 'react'
import NavBar from "./component/NavBar";
import AppRouter from "./component/AppRouter";
import {BrowserRouter} from "react-router-dom";
const App =()=> {
  return (
      <BrowserRouter>
          <div>
              <NavBar />
              <AppRouter />
          </div>

      </BrowserRouter>
  );
}

export default App;
