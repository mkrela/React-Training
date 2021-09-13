import "./App.css";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Membre from "./components/Membre";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>TUTO REACT</h1>
          <Membre nom="Francesca"> C'est moi la plus belle </Membre>
          <Membre nom="Fabrice" />
          <Membre nom="Doris" />
          <Membre nom="Romane" />
          <Membre nom="Matthieu" />
        </div>
      </Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>React APP on va apprendre</h1>
//       </header>
//     </div>
//   );
// }

export default App;
