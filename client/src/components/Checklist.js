import React, { useEffect, useState } from "react";

export default function Checklist(props) {
  const prayer = ["Fajar", "Johor", "Asar", "Magreb", "Esha"];

  const UpdateCheck = (event) => {
    let state = event.target.checked ? 1 : 0;
    let ChangeCheck = fetch(`http://localhost:4000/update/id&${state}`);
    ChangeCheck.then((response) => {
      return response.json();
    })
    .then((response) => {
      setcheck(response.res)
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const fetchChecklist=()=>{
    let fetchCheck = fetch("http://localhost:4000/api");
    fetchCheck.then((response) => {
      return response.json();
    })
    .then((response) => {
      setcheck(response.res)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchChecklist()
  },[])
  const [check,setcheck]=useState([])
  return (
    <div>
      Prayer
      <br />
      {prayer.map((element, index) => {
        return (
          <div className="form-check form-check-inline" key={index}>
            <input className="form-check-input"  type="checkbox"  value="T" onClick={UpdateCheck} defaultChecked={check[index]}/>
            <label className="form-check-label" htmlFor="inlineCheckbox{$i}">{element}</label>
          </div>
        );
      })}
    </div>
  );
}
