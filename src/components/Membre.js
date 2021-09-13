import React, {Fragment} from "react";
import { Children } from "react";

const Membre = ({nom, children}) => {
    return(
        <Fragment>
       <h2>Membre de ma famille: {nom}</h2>
       <p>{children}</p>
       </Fragment>
    )
}
export default Membre