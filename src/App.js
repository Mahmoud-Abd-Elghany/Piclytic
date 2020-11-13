import React from "react"
import Navbar from "./components/navbar/Navbar"
import FormLink from "./components/formLink/FormLink"
import Analyzed from "./components/Analyze/Analyzed"
import Invalid from "./components/Invalid/Invalid"
import "./app.css"
import {PicProvider} from "./state/picContext"

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <PicProvider>
    <Router>
        <Navbar/>
        <Route exact path="/Piclytic/Home"> 
          <FormLink/>
        </Route>
        <Route exact path="/Piclytic/Analyze"> 
          <Analyzed/>
        </Route>
        <Route exact path="/Piclytic/invalid"> 
          <Invalid/>
        </Route>
    </Router>
    </PicProvider>
  );
}

export default App;
