import React, {Fragment} from "react";
import { Children } from "react";

const Membre = ({nom, age, children}) => {
    return(
        <Fragment>
       <h2>{nom} : {age}</h2>
       <p>{children}</p>
       </Fragment>
    )
}
export default Membre