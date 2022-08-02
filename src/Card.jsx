import React from "react";


const Card = (props)=>{
    // console.log(props.title)
    return(<>
         <div className="card">
  <img src={props.Image} className="card-img-top" alt="..." id="CardImage"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.Description}</p>
    <a className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>)
}

export default Card;