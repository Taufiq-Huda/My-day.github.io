import React,{useEffect,useState} from "react";
import SegmentHistory from "../components/SegmentHistory";
// require('dotenv').config();

export default function DailyHistory() {
  let [thispageStruc,setthispagestruc]=useState({})
  let data
  const chartdata = {
    "Economy":[
      [{ type: "date", label: "Day" },"Earning","Spending"],
    ],
    "Relegious":[
      [{ type: "date", label: "Day" },"Good Work","Bad Work"],
    ],
  }

  const host=process.env.REACT_APP_HOST
  
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

  const setchartdata=()=>{
    data.forEach((element)=>{
      Object.keys(element).forEach((ele,i)=>{
        if (i!==0) { 
          let push = true, a=chartdata[ele.split("-")[0]]
          
          a.forEach((entry,index)=>{
            let b= new Date(element.date).toString();
            if(entry[0].toString()===b){
              push=false
              a[index][2]= element[ele];
            }
          })
          
          if(push){
            a.push([new Date(element.date),  element[ele], 30])
          }
  
          chartdata[ele.split("-")[0]]=a
        }
      })
    })
    setthispagestruc(chartdata)
  }
  const getdata=()=>{
    console.log("getting data")
    
    data = [
      {
        date: "2002-10-10",
        "Economy-Earning": 5000,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 20,
      },
      {
        date: "2002-10-11",
        "Economy-Earning": 0,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 120,
      },
      {
        date: "2002-10-12",
        "Economy-Earning": 50,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 140,
      },
      {
        date: "2002-10-13",
        "Economy-Earning": 100,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 10,
        "Economy-Spending": 110,
      },
      {
        date: "2002-10-14",
        "Economy-Earning": 50,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 170,
      },
      {
        date: "2002-10-15",
        "Economy-Earning": 1500,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 150,
      },
      {
        date: "2002-10-16",
        "Economy-Earning": 0,
        "Relegious-Good Work": 8,
        "Relegious-Bad Work": 6,
        "Economy-Spending": 120  
      },
    ];
  
  }

  useEffect(() => {
    // GetPageStructure()
    getdata()
    setchartdata()
  }, [])
  return (
    <div className="d-flex container justify-content-center my-5">
      <div className="my-5">
      {Object.keys(thispageStruc).map((element,index)=>{
        return(
          <SegmentHistory key={index} title={element} blocks={thispageStruc[element]} data={thispageStruc[element]}/>
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
