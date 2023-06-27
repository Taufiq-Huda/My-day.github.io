import React, { useEffect, useState } from "react";
import FeildValuePair from "./FeildValuePair";

export default function Block(props) {    
  const add_FeildValuePair = () => {
        SetPairs(Pairs.concat(""))
  };
  
  const GetAllPairs = async ()=>{
    const response = await fetch(`http://localhost:4000/api/newpage/getpairs/${props.path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OTQ5ZjdhOTQ0N2QxMDY5N2M5ZDJkIn0sImlhdCI6MTY4Nzc2NzU0M30.XZtV5XxVuluXyBroeUU2DL1EfHA8aD-H6m1pf2_AqCs"
        }
      })
      const {pairs} = await response.json()
      SetPairs(pairs)
  }

  useEffect(() => {
    GetAllPairs()
  }, [])

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
