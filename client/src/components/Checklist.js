import React, { useEffect, useState } from "react";

export default function Checklist(props) {

  const UpdateCheck = (event) => {
    let state = event.target.checked ? 1 : 0;
    props.update()
  };

  // const fetchChecklist=()=>{
  //   let fetchCheck = fetch("http://localhost:4000/api");
  //   fetchCheck.then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     // setcheck(response.res)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  // useEffect(() => {
  //   fetchChecklist()
  // },[])
  return (
    <div className="my-3">
      <h4>{props.title}</h4>
      {props.list.map((element, index) => {
        return (
          <div className="form-check form-check-inline" key={index}>
            <input className="form-check-input"  type="checkbox"  value="T" onClick={UpdateCheck} defaultChecked={element.checked}/>
            <label className="form-check-label" htmlFor="inlineCheckbox{$i}">{element.title}</label>
          </div>
        );
      })}
    </div>
  );
}
