import React, { useEffect } from "react";

export default function Checklist({title,list,path}) {

  const UpdateCheck = (event) => {
    // let state = event.target.checked ? 1 : 0;
    
  };
  
  const fetchChecklist= async()=>{
    // let fetchCheck = await fetch(`${process.env.REACT_APP_HOST}/api/newpage/getpairs/${path}`);
    // fetchCheck.then((response) => {
      // return response.json();
    // })
    // .then((response) => {
      // setcheck(response.res)
    // })
    // .catch((err) => {
      // console.log(err);
    // });
  }

  useEffect(() => {
    fetchChecklist()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <h4>{title}</h4>
      {list.map((element, index) => {
        return (
          <div className="form-check form-check-inline" key={index}>
            <input className="form-check-input"  type="checkbox"  value="T" onClick={UpdateCheck} defaultChecked={element.checked}/>
            <label className="form-check-label" htmlFor="inlineCheckbox{$i}">{element.title}</label>
          </div>
        );
      })}</>
    // </div>
  );
}
