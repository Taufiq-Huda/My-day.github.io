import React,{useEffect,useState} from "react";
import SegmentHistory from "./SegmentHistory";

const data = [
  {
    date: "2002-10-10",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-11",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-12",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-13",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-14",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-15",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
  {
    date: "2002-10-16",
    "Economy-Earning": "500",
    "Relegious-Good Work": "8",
    "Relegious-Bad Work": "6",
    "Economy-Spending": "geger",
  },
];

const chartdata = {
  "Economy":[
    [{ type: "date", label: "Day" },"Spending","Earning",],
    [new Date("2002-10-16"),  80.8, 41.8],
    [new Date("2002-10-17"),  69.5, 32.4],
    [new Date("2002-10-18"),  57, 25.7],
    [new Date("2002-10-24"),  42.9, 14.8],
  ],
  "Relegious":[
    [
      "Day",
      "Guardians of the Galaxy",
      "The Avengers",
      "Transformers: Age of Extinction",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ],
}

data.forEach((element,index)=>{
  console.log(element.date)
  Object.keys(element).forEach((ele,i)=>{
    let a=chartdata[ele.split("-")[0]]
    console.log("a",a)
  })
})

export default function DailyHistory() {
  const host="http://localhost:4000"
  let [thispageStruc,setthispagestruc]=useState({Segment:[]})
  
  const details=()=>{
    console.log("hello")
  }

  const GetPageStructure= async ()=>{
       // API Call 
      const response = await fetch(`${host}/api/newpage/pagestructure`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("auth-token")
        }
      })
      const {pageStructure} = await response.json() 
      setthispagestruc(pageStructure)
    }
    console.log(thispageStruc)
    useEffect(() => {
        GetPageStructure()
    }, [])
  return (
    <div className="d-flex container justify-content-center my-5">
      <div className="my-5">
      {Object.keys(thispageStruc.Segment).map((element,index)=>{
        return(
          <SegmentHistory key={index} title={element} blocks={thispageStruc.Segment[element]} data={chartdata[element]}/>
        )
        })
      }
      </div>
      {/* <table className="table align-middle mb-0 bg-white my-5">
        <thead className="bg-light">
          <tr>
            <th rowSpan={2} className="text-center">
              Date
            </th>
            <th colSpan={2} className="text-center">
              Economy
            </th>
            <th colSpan={2} className="text-center">
              Religious
            </th>
          </tr>
          <tr>
            <th>Earn</th>
            <th>Spend</th>
            <th>Good work</th>
            <th>Bad work</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element,index)=>{
          return(
            <tr key={index}>
                <td onClick={details}><a href="#" className="pe-auto">{element.date}</a></td>
                <td>{element["Economy-Earning"]}</td>
                <td>{element["Economy-Spending"]}</td>
                <td>{element["Relegious-Good Work"]}</td>
                <td>{element["Relegious-Bad Work"]}</td>
            </tr>)})
          }
        </tbody>
      </table> */}
    </div>
  );
}
