import React, {Fragment} from "react";
import { Children } from "react";
import './Style.css';

const Membre = ({nom, age, children}) => {
    return(
        <Fragment>
       <h2 style={{
           backgroundColor: age < 10 ? 'red' : 'green',
           color: age < 10 ? 'white' : 'black'
           }}>{nom} : {age}</h2>
       <p>{children}</p>
       </Fragment>
    )
}
export default Membre