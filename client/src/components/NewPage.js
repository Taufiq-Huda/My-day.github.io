import React,{useState,useEffect}from 'react'

import PageHead from "./PageHead";
import Segment from "./Segment";
import PageState from "../contex/NewPage/PageState"

export default function NewPage() {
    let [thispageStruc,setthispagestruc]=useState({Segment:[]})
    const GetPageStructure= async ()=>{
       // API Call 
      const response = await fetch(`http://localhost:4000/api/newpage/pagestructure`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OTQ5ZjdhOTQ0N2QxMDY5N2M5ZDJkIn0sImlhdCI6MTY4Nzc2NzU0M30.XZtV5XxVuluXyBroeUU2DL1EfHA8aD-H6m1pf2_AqCs"
        }
      });
      const {pageStructure} = await response.json() 
      setthispagestruc(pageStructure)
    }
      
    useEffect(() => {
        GetPageStructure()
    }, [])
    
  return (
    <div className="d-flex container justify-content-center my-5">
        <div className="d-flex flex-column my-3">
          <PageHead />
          <PageState>
            <form action="welcome_get.php" method="get">
              {Object.keys(thispageStruc.Segment).map((element,index)=>{
                  return(
                    <Segment title={element} key={index} blocks={thispageStruc.Segment[element]}/>
                  )
                })
              }
              {/* <div className="input-group">
              <span className="input-group-text">Dairy</span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div> */}
            </form>
          </PageState>
        </div>
      </div>
  )
}
