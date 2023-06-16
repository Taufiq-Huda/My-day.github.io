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
