import React from "react";
import {NavLink} from 'react-router-dom'

const HD = (props)=>{
    return(<>
     <section>
        <div className="Text-div">
        <div className="TextD">
            <h1 className="Text text-capitalize">{props.Heading}<span className="Text text-success text-capitalize">{props.Heading2}  </span></h1>
            <h5>{props.Heading3}</h5>
            <button type="button" className="btn btn-outline-primary">
                <NavLink to={props.Open}>Get Started</NavLink>
            </button>
        </div>
              
        </div>

        <div className="Img-div">
        </div>
     </section>
    </>)
}


export default HD;