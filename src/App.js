import "./App.css";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Membre from "./components/Membre";
import Button from "./components/button";

const famille = {
  membre1: { nom: "Matthieu", age: 27 },
  membre2: { nom: "Francesca", age: 26 },
  membre3: { nom: "Kobe", age: 5 },
  membre4: { nom: "Henri", age: 0 },
};
class App extends Component {
  state = {
    famille,
  };

  handleClick = (num) => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    famille.membre2.age += num;
    famille.membre3.age += num;
    famille.membre4.age += num;
    this.setState({ famille });
  };

  handleChange = (event) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    console.log(nom);
    famille.membre1.nom = nom
    this.setState({famille})
  };

  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <Fragment>
        <div className="App">
          <h1>TUTO REACT</h1>
          <input
            value={famille.membre1.nom}
            onChange={this.handleChange}
            type="text"
          />
          <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
          <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
          <Membre nom={famille.membre3.nom} age={famille.membre3.age}>
            Je suis un bon bibi qui aime son papa et sa maman{" "}
          </Membre>
          <Membre nom={famille.membre4.nom} age={famille.membre4.age} />
          <Button vieillir={() => this.handleClick(1)} />
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
