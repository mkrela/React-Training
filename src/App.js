import "./App.css";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Membre from "./components/Membre";


const famille = {
  membre1: {nom:'Matthieu',
            age:27
          },
  membre2: {nom:'Francesca',
            age:26
          },
membre3: {nom:'Kobe',
          age:5
}
}
class App extends Component {
  state= {
    famille
  }
  render() {
    const {titre} = this.props
    const {famille}= this.state
    return (
      <Fragment>
        <div className="App">
          <h1>TUTO REACT</h1>
          <Membre nom="Francesca"> C'est moi la plus belle </Membre>
          <Membre nom={famille.membre1.nom} />
          <Membre nom={famille.membre2.nom} />
          <Membre nom={famille.membre3.nom} />
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
