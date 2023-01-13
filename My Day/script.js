// let promise= new Promise(function(resolve, reject){
//   const xmlhttp = new XMLHttpRequest();
//   xmlhttp.onload = function () {
//     section=this.responseText.split("\r\n");
//     //title_txtlabel_numlabel_supsection_NumberOfSubSection
//     resolve(section);
//   };
//   xmlhttp.open("GET", "getsection.php");
//   xmlhttp.send();
// })
// promise.then((section)=>{
//   section.forEach((str, index) => {
//     const xmlhttp = new XMLHttpRequest();
//     xmlhttp.onload = function () {
//       res=this.responseText.split("__");
//       target = document.getElementById(res[1]);
//       console.log(res)
//       target.innerHTML+= res[0];
//     };
//     xmlhttp.open("GET", "section.php?q=" + str);
//     xmlhttp.send();
//   });
// })


let pending_promise= 0 ;
let promise_index;

const set_up = () => {
  // p=["Fajar","Johor","Asar","Magreb","Esha"]
  // p.forEach( time => {
  //   state=document.getElementById(time)
  //   console.log(state)
  // });
};

const add_subsection = (section) => {

  e = document.getElementById(section);
  if(navigator.onLine){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
      let all_subsection = Array.from(e.children)
      let all_subsection_value =[]
      let j=0
      for(let i=1 ; i<all_subsection.length ; i+=2){
        let a=Array.from(all_subsection[i].children)
        all_subsection_value[j++] = [a[0].value,a[2].value]
      }
      console.log(all_subsection_value)
      e.innerHTML+= this.responseText;
      // console.log(this.responseText)
      all_subsection = Array.from(e.children)
      // console.log(all_subsection)
      j=0
      for(let i=1 ; i<all_subsection.length-1 ; i+=2){
        let a=Array.from(all_subsection[i].children)
        val=all_subsection_value[j++];
        a[0].value = val[0]
        a[2].value = val[1]
        console.log(a[0].value,a[2].value)
        // all_subsection_value[j++] = [a[0].value,a[2].value]
      }
      // console.log(all_subsection_value)
      // val=Array.from(e.children).map((value)=>{
      //   console.log(value);
      // })
      // console.log(e.children)
      console.log("bhgk")
      // console.log(all_subsection)
    };
    xmlhttp.open("GET", "../Backend/add_sub_section.php?q=" + section);
    xmlhttp.send();
  }
  else{
    alert("Internet is not connected")
  }
  /*
  // f=e.lastElementChild.firstElementChild.setAttribute("value", "hi") ;
  // console.log(f);
  */
};

const source = (str,section,type) => {
  serial=(section.offsetTop-24)/62
  console.log(serial)
  
  if(navigator.onLine){
    if(localStorage.length!=0){
      while(localStorage.length!=0){
        //do something
      }
      //updating data
      const ofline_data = new XMLHttpRequest();
      ofline_data.onload = function () {
        // console.log(this.response);
        // document.getElementById("txtHint").innerHTML = this.responseText;
      };
      ofline_data.open("GET", "../Backend/update_section_data.php?q=" + str + "_" + section.parentElement.id  + "_" + type + "_" + serial );
      ofline_data.send();
    }

    //updating data
    const update_data = new XMLHttpRequest();
    update_data.onload = function () {
      // console.log(this.response);
      // document.getElementById("txtHint").innerHTML = this.responseText;
    };
    update_data.open("GET", "../Backend/update_section_data.php?q=" + str + "_" + section.parentElement.id  + "_" + type + "_" + serial );
    update_data.send();
    
    /*

    get hint
    if (str.length == 0) {
      document.getElementById("txtHint").innerHTML = "";
      return;
    } else {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function () {
        document.getElementById("txtHint").innerHTML = this.responseText;
      };
      xmlhttp.open("GET", "../Backend/gethint.php?q=" + str);
      xmlhttp.send();
    }
    */

  }
  else{
    key=`${section.parentElement.id}_${serial}_${type}`
    localStorage.setItem(key,str)
  }
};

const prayer=(time)=>{
  // e = document.getElementById();
  p={
    0:"Fajar",
    1:"Johor",
    2:"Asar",
    3:"Magreb",
    4:"Esha"
  }
  state=document.getElementById(p[time]).checked
  state = state ? "1" : "0";
  
  const prayer_uodate = new XMLHttpRequest();
  prayer_uodate.onload = function () {
    // e.innerHTML+= this.responseText;
    // console.log(this.responseText);
  };
  prayer_uodate.open("GET", "../Backend/update_prayer.php?p=" + state + time);
  prayer_uodate.send();
  // console.log(state);
}

const prayer_display = new XMLHttpRequest();
prayer_display.onload = function () {
  arr=this.responseText.split("-")
  arr.forEach((state , index) => {
    if(state == "1"){
      arr[index] = true;
    }
    else if(state == "0"){
      arr[index] = false;
    }
  });
  p={
    0:"Fajar",
    1:"Johor",
    2:"Asar",
    3:"Magreb",
    4:"Esha"
  }
  for(i=0;i<5;i++){
    document.getElementById(p[i]).checked = arr[i]
  }
};
prayer_display.open("GET", "../Backend/update_prayer.php?p=" + "06");
prayer_display.send();
