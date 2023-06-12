import React from "react";

export default function Block(props) {
  return (
    <div>
      <label htmlFor="exampleInputEmail1" className="form-label">
        {props.title}
      </label>
      <div className="input-group mb-3 d-flex flex-column" id={props.title}>
        <div className="sub-section d-flex flex-row">
          <input
            type="text"
            className="form-control"
            placeholder={props.txt_label}
            aria-label="test2"
            /*'onkeyup='source(this.value,this.parentElement,`a`)'{$txt}*/
          />
          <span className="input-group-text">@</span>
          <input
            type="number"
            className="form-control"
            placeholder={props.num_label}
            aria-label={props.num_label} 
            /*onkeyup='source(this.value,this.parentElement,`1`)'{$num}*/
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary" 
        /*onclick=add_subsection('{$title}')*/
      >
        More Field
      </button>
    </div>
  );
}
