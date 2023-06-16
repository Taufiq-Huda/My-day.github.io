import React from "react";
import Block from "./Block";

export default function Segment(props) {
  return (
    <div>
      <div className="mb-3 d-flex flex-column">
        {props.title}
        <hr/>
        <div className="d-flex flex-column" id="eco">
          <div className="earn mb-3">
            <Block
              title="Earning"
              num_label="Amount"
              txt_label="Source"
            />
            <Block
              title="Spending"
              num_label="Amount"
              txt_label="Field"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
