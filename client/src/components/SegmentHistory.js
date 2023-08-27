import React from 'react'
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "",
    subtitle: "in Taka",
  },
};

export default function SegmentHistory({title,data}) {
  // console.log(data)
  return (
    <div>
      <div className="mb-3 d-flex flex-column container border rounded p-2">
        <h3>{title}</h3>
        <hr />
        <div className="d-flex flex-row my-2 ">
            <div className="col m-4">
                <Chart chartType="Line" width="700px" height="400px" data={data} /*options={options}*/ />
            </div>
        </div> 
      </div>
    </div>
  )
}
