import React from "react"
import Navbar from "./components/navbar/Navbar"
import FormLink from "./components/formLink/FormLink"
import Analyzed from "./components/Analyze/Analyzed"
import "./app.css"
import {PicProvider} from "./state/picContext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <PicProvider>
    <Router>
        <Navbar/>
        <Route exact path="/Piclytic"> 
          <FormLink/>
        </Route>
        <Route exact path="/Analyze"> 
          <Analyzed/>
        </Route>
    </Router>
    </PicProvider>
  );
}

export default App;
