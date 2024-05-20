import React, { useEffect, useState } from "react";
import FeildValuePair from "./FeildValuePair";

export default function Block(props) {    

  const add_FeildValuePair = () => {
   SetPairs(Pairs.concat({text: "", value: ""}))
  };

  const GetAllPairs = async ()=>{
    // console.log(props.path)
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/newpage/getpairs/${props.path}`, {
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
    console.log("test")
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  let [Pairs, SetPairs]=useState([])

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
