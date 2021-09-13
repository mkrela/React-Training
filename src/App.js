import "./App.css";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Membre from "./components/Membre";

const famille = {
  membre1: { nom: "Matthieu", age: 27 },
  membre2: { nom: "Francesca", age: 26 },
  membre3: { nom: "Kobe", age: 5 },
};
class App extends Component {
  state = {
    famille,
  };

  handleClick = () => {
    const famille={ ...this.state.famille}
    famille.membre1.age += 1
    this.setState({famille})
  }

  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <Fragment>
        <div className="App">
          <h1>TUTO REACT</h1>
          <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
          <Membre nom={famille.membre2.nom} age={famille.membre2.age}/>
          <Membre nom={famille.membre3.nom} age={famille.membre3.age}/>
          <button onClick={this.handleClick}>Vieillir</button>
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
