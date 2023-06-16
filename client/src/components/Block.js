import React from "react";
import FeildValuePair from "./FeildValuePair";

export default function Block(props) {    
  return (
    <div>
      <label htmlFor="exampleInputEmail1" className="form-label">
        {props.title}
      </label>
      <div className="input-group mb-3 d-flex flex-column" id={props.title}>
        <br/>
        <FeildValuePair num_label="Amount" txt_label="Source"/>
      </div>
      <button  type="button"  className="btn btn-primary"  /*onclick=add_subsection('{$title}')*/ > More Field </button>
    </div>
  );
}
