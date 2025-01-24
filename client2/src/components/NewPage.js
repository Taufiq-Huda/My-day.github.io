import React,{useState,useEffect}from 'react'

import PageHead from "./PageHead";
import Segment from "./Segment";

const host="http://localhost:4000"

export default function NewPage() {
    let [thispageStruc,setthispagestruc]=useState({Segment:[]})
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
      
    useEffect(() => {
        GetPageStructure()
    }, [])
    
  return (
    <div className="d-flex container justify-content-center my-5">
        <div className="d-flex flex-column my-3">
          <PageHead />
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
        </div>
      </div>
  )
}
