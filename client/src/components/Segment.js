import React from "react";
import Block from "./Block";

import Checklist from "./Checklist";

export default function Segment({title, blocks}) {

  return (
    <div>
      <div className="mb-3 d-flex flex-column container border rounded p-2">
        <h3>{title}</h3>
        <hr />
        <div className="d-flex flex-row my-2 ">
          <div className="row">
            {blocks.map((element, index) => {
              if (element.type === "FVP") {
                return (
                  <div className="col" key={index}>
                    <Block  title={element.title}  num_label={element.NumInput}  txt_label={element.TxtInput} path={`${title}/${element.title}`}  />
                  </div>
                );
              } else if (element.type === "CL") {
                return (
                  <div className="col" key={index}>
                    <Checklist
                      title={element.title}
                      list={element.list}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
