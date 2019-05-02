// import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar'
// import TypoGraphy from '@material-ui/core/Typography'
// import NavBar from './components/navbar'
//
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <AppBar color="primary" position="static">
//           <Toolbar>
//             <TypoGraphy variant="title" color="inherit">
//               Whittle Said Applications
//            </TypoGraphy>
//            < NavBar />
//           </Toolbar>
//         </AppBar>
//
//       </div>
//     );
//   }
// }
// export default App;

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Item One" component={Link} to="/" />
                <Tab label="Item Two" component={Link} to="/tab2" />
                <Tab
                  label="Item Three"
                  href="#basic-tabs"
                  component={Link}
                  to="/tab3"
                />
              </Tabs>
              <Switch>
                <Route path="/tab2" render={() => <div>Tab 2</div>} />
                <Route path="/tab3" render={() => <div>Tab 3</div>} />
                <Route path="/" render={() => <div>Tab 1</div>} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
