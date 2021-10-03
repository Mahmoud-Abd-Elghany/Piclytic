import React from "react"
import Navbar from "./components/navbar/navbar.component"
import FormLinkPage from "./pages/form-link/formlink-page.component"
import InvalidPage from "./pages/invalid/invalid-page.component"
import AnalysisPageContainer from "./pages/analysis/analysis-page.container"
import "./App.css"
import {PicProvider} from "./state/picContext"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <PicProvider>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={FormLinkPage}/> 
          <Route exact path="/Analyze" component={AnalysisPageContainer}/>
          <Route exact path="/invalid" component={InvalidPage}/> 
        </Switch>
    </Router>
    </PicProvider>
  );
}

export default App;
