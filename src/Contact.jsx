import React, { useState } from "react";

const Contact = ()=>{
   const [Data,InsertData] = useState({
      Fname:"",
      Lname:"",
      Number:"",
      Email:"",
      Description:"",
   })



   const GetData = (e)=>{
      const Value = e.target.value;
      const Name = e.target.name;
      InsertData((prev)=>{
         return {
            ...prev,
            [Name]:Value
         }//we can also use if else to do this but this is very lengthy process
         

      //   if(Name === "Fname"){
      //     return {
      //         Fname:Value
      //     }
      //   }else if(Name === "Lname"){
      //    return {
      //       ...prev,
      //       Lname:Value
      //   }
      //  }
      //  else if(Name === "Number"){
      //    return {
      //       ...prev,
      //       Number:Value
      //   }
      //  }else if(Name ==="Email"){
      //    return {
      //       ...prev,
      //       Email:Value
      //   }
      //  }else if(Name === "Description"){
      //    return {
      //       ...prev,
      //       Description:Value
      //   }
      //  }
      })
   }

   const ShowData = ()=>{
      alert(Object.entries(Data))
      console.log(Data)
      InsertData("")
      
   }
       
   const Norefresh=(e)=>{
    e.preventDefault();
   }
  return(<>
    
           <div className="Contact-Background">
        <form onSubmit={Norefresh} className="Contact-form">
           <label className="Text text-capitalize">First Name:</label><br/>
           <input type="text" placeholder="Enter First Name" onChange={GetData} name="Fname" value={Data.Fname}/><br/>
              <br/>
           <label className="Text text-capitalize">Last Name:</label><br/>
           <input type="text" placeholder="Enter Last Name" onChange={GetData} name="Lname" value={Data.Lname}/><br/>
           <br/>
           <label className="Text text-capitalize">Phone Number:</label><br/>
           <input type="text" placeholder="Mobile Number" onChange={GetData} name="Number" value={Data.Number}/><br/>
           <br/>
           <label className="Text text-capitalize">Email address:</label><br/>
           <input type="email" placeholder="Email Id" onChange={GetData} name="Email" value={Data.Email}/><br/>
           <br/>
           <label className="Text text-capitalize">Description:</label><br/>
           <textarea placeholder="Enter Text" onChange={GetData} name="Description" value={Data.Description}/><br/>
           <button onClick={ShowData}>Submit</button>
        </form>
     </div>
           
     
    </>)
}


export default Contact;



