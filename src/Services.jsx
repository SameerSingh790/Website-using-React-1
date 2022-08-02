import React from "react";
import Card from "./Card";
import CardData from "./CardD.jsx";


const Services = ()=>{

    // console.log(CardData)
    return(<>

<div className="container-fluid mb-5">
        <div className="row">
           <div className="col-10 mx-auto">
           {CardData.map((val,index)=>{
        return <Card
            id={index}
            title={val.Title}
            Description={val.Desc}
            Image={val.img}
            itemN={index}>

            </Card>
      })}
           </div>

        </div>

    </div>
      
    </>)
}


export default Services;