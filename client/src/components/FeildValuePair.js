import React, {useState} from "react";

export default function FeildValuePair(props) {
    const UpdateFeild = (event) => {
        if(navigator.onLine){

          console.log("hujyg vueqth ")
          setText(event.target.value)
          // if(localStorage.length!=0){
          //   while(localStorage.length!=0){
          //     //do something
          //   }
          //   //updating data
          //   const ofline_data = new XMLHttpRequest();
          //   ofline_data.onload = function () {
          //     // console.log(this.response);
          //     // document.getElementById("txtHint").innerHTML = this.responseText;
          //   };
          //   ofline_data.open("GET", "../Backend/update_section_data.php?q=" + {text} + "_" + section.parentElement.id  + "_"   "_" + serial );
          //   ofline_data.send();
          // }
    
    
          //updating data
          // const update_data = new XMLHttpRequest();
          // update_data.onload = function () {
            // console.log(this.response);
            // document.getElementById("txtHint").innerHTML = this.responseText;
          // };
          // update_data.open("GET", "../Backend/update_section_data.php?q=" + {text} + "_" + section.parentElement.id  + serial );
          // update_data.send();
          
          /*
          get hint
          if ({text}.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
          } else {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function () {
              document.getElementById("txtHint").innerHTML = this.responseText;
            };
            xmlhttp.open("GET", "../Backend/gethint.php?q=" + {text});
            xmlhttp.send();
          }
          */
         
        }
        // else{
          //   key=`${section.parentElement.id}_${serial}_${type}`
          //   localStorage.setItem(key,{text})
          // }
        };
    const UpdatValue = (event) => {
        if(navigator.onLine){
          console.log("hujyg vueqth ")
          setValue(event.target.value)
          // if(localStorage.length!=0){
          //   while(localStorage.length!=0){
          //     //do something
          //   }
          //   //updating data
          //   const ofline_data = new XMLHttpRequest();
          //   ofline_data.onload = function () {
          //     // console.log(this.response);
          //     // document.getElementById("txtHint").innerHTML = this.responseText;
          //   };
          //   ofline_data.open("GET", "../Backend/update_section_data.php?q=" + {text} + "_" + section.parentElement.id  + "_"   "_" + serial );
          //   ofline_data.send();
          // }
    
    
          //updating data
          // const update_data = new XMLHttpRequest();
          // update_data.onload = function () {
            // console.log(this.response);
            // document.getElementById("txtHint").innerHTML = this.responseText;
          // };
          // update_data.open("GET", "../Backend/update_section_data.php?q=" + {text} + "_" + section.parentElement.id  + serial );
          // update_data.send();
          
          /*
      
          get hint
          if ({text}.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
          } else {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function () {
              document.getElementById("txtHint").innerHTML = this.responseText;
            };
            xmlhttp.open("GET", "../Backend/gethint.php?q=" + {text});
            xmlhttp.send();
          }
          */
         
        }
        // else{
          //   key=`${section.parentElement.id}_${serial}_${type}`
          //   localStorage.setItem(key,{text})
          // }
        };
        const [text, setText] = useState('');
        const [value, setValue] = useState('');
  return (
    <div className="sub-section d-flex flex-row">
      <input type="text" className="form-control" placeholder={props.txt_label} aria-label="test2" value={text}onChange={UpdateFeild} />
      <span className="input-group-text">@</span>
      <input type="number" className="form-control" placeholder={props.num_label} aria-label={props.num_label} value={value} onChange={UpdatValue}/>
    </div>
  );
}
