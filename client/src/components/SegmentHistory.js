import React from 'react'
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "",
    subtitle: "in Taka",
  },
};

export default function SegmentHistory(props) {
  return (
    <div>
      <div className="mb-3 d-flex flex-column container border rounded p-2">
        <h3>{props.title}</h3>
        <hr />
        <div className="d-flex flex-row my-2 ">
            <div className="col m-4">
                <Chart chartType="Line" width="700px" height="400px" data={props.data} /*options={options}*/ />
            </div>
        </div> 
      </div>
    </div>
  )
}
