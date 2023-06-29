import React, {useState} from "react";

const host="http://localhost:4000"

export default function FeildValuePair(props) {

    const UpdateFeildDisplay = (event) => {
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
        setText(event.target.value)
      };

    const UpdatValueDisplay = (event) => {
          setValue(event.target.value)
      };

    const UpdateValueInBackend = async ()=>{
      //updating data in backend
      if (value!=="") {
        const response = await fetch(`${host}/api/newpage/updatepair/${props.path}/value&${value}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("auth-token")
          }
        })
        await response.json()
      }
    }

    const UpdateTextInBackend = async ()=>{
      //updating data in backend
      if (text!=="") {
        const response = await fetch( `${host}/api/newpage/updatepair/${props.path}/text&${text}` , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("auth-token")
          }
        })
        await response.json()
      }
      }

    const [text, setText] = useState('');
    const [value, setValue] = useState('');

  return (
    <div className="sub-section d-flex flex-row my-1">
      <input type="text" className="form-control" placeholder={props.txt_label} aria-label="test2" value={text} onChange={UpdateFeildDisplay} onBlur={UpdateTextInBackend}/>
      <span className="input-group-text">@</span>
      <input type="number" className="form-control" placeholder={props.num_label} aria-label={props.num_label} value={value} onChange={UpdatValueDisplay} onBlur={UpdateValueInBackend}/>
    </div>
  );
}
