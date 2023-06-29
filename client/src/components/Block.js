import React, { useEffect, useState } from "react";
import FeildValuePair from "./FeildValuePair";

const host="http://localhost:4000"

export default function Block(props) {    
  const add_FeildValuePair = () => {
   SetPairs(Pairs.concat(""))
   fetch(`${host}/api/newpage/addpairs/${props.path}`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         "auth-token": localStorage.getItem("auth-token")
       }
     })
  };
  
  const GetAllPairs = async ()=>{
    const response = await fetch(`${host}/api/newpage/getpairs/${props.path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("auth-token")
        }
      })
      const {pairs} = await response.json()
      SetPairs(pairs)
  }

  useEffect(() => {
    GetAllPairs();
  }, [ ]) // eslint-disable-line react-hooks/exhaustive-deps

  let [Pairs, SetPairs]=useState([""])

  return (
    <div className="mx-">
      <label htmlFor="exampleInputEmail1" className="form-label"><h4>{props.title}</h4></label>
      <div className="input-group mb-3 d-flex flex-column" id={props.title}>
        {Pairs.map((element,index)=>{
          return(
            <FeildValuePair num_label={props.num_label} txt_label={props.txt_label} path={`${props.path}/${index}`} value={element} key={index}/>
          )
        })}
      </div>
      <button type="button"  className="btn btn-primary" onClick={add_FeildValuePair}> More Field </button>
    </div>
  );
}
