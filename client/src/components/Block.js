import React from "react";
import FeildValuePair from "./FeildValuePair";

export default function Block(props) {    
  const add_subsection = (event) => {
    if(navigator.onLine){
      // const xmlhttp = new XMLHttpRequest();
      // xmlhttp.onload = function () {
        // let all_subsection = Array.from(e.children)
        // let all_subsection_value =[]
        // let j=0
        // for(let i=1 ; i<all_subsection.length ; i+=2){
          // let a=Array.from(all_subsection[i].children)
          // all_subsection_value[j++] = [a[0].value,a[2].value]
        // }
        // console.log(all_subsection_value)
        // e.innerHTML+= this.responseText;
        // console.log(this.responseText)
        // all_subsection = Array.from(e.children)
        // console.log(all_subsection)
        // // j=0
        // for(let i=1 ; i<all_subsection.length-1 ; i+=2){
        //   let a=Array.from(all_subsection[i].children)
        //   val=all_subsection_value[j++];
        //   a[0].value = val[0]
        //   a[2].value = val[1]
        //   console.log(a[0].value,a[2].value)
        //   // all_subsection_value[j++] = [a[0].value,a[2].value]
        // }
        // console.log(all_subsection_value)
        // val=Array.from(e.children).map((value)=>{
        //   console.log(value);
        // })
        // console.log(e.children)
        // console.log("bhgk")
        // console.log(all_subsection)
      // };
      // xmlhttp.open("GET", "../Backend/add_sub_section.php?q=" + section);
      // xmlhttp.send();
    }
    else{
      alert("Internet is not connected")
    }
  };

  return (
    <div className="mx-">
      <label htmlFor="exampleInputEmail1" className="form-label"><h4>{props.title}</h4></label>
      <div className="input-group mb-3 d-flex flex-column" id={props.title}>
        <FeildValuePair num_label={props.num_label} txt_label={props.txt_label}/>
      </div>
      <button type="button"  className="btn btn-primary" onClick={add_subsection}> More Field </button>
    </div>
  );
}
