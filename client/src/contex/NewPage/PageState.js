import Segment from "../../components/Segment";
import PageContext from "./PageContext";
import { useState } from "react";

const PageState = (props) => {
  const defaultState = {
    Segment: {
      Economy: [
        {
          title: "Earning",
          NumInput: "Amount",
          TxtInput: "Source",
          type: "FVP",
        },
        {
          title: "Spending",
          NumInput: "Amount",
          TxtInput: "Field",
          type: "FVP",
        },
      ],
      Relegious: [
        {
          title: "Good Work",
          NumInput: "Amount",
          TxtInput: "Source",
          type: "FVP",
        },
        {
          title: "Bad Work",
          NumInput: "Amount",
          TxtInput: "Field",
          type: "FVP",
        },
        {
          title: "Prayer",
          list: [
            { title: "Fajar", checked: true },
            { title: "Johor", checked: true },
            { title: "Asar", checked: true },
            { title: "Magreb", checked: true },
            { title: "Esha", checked: true },
          ],
          type: "CL",
        },
      ],
    },
  };

  const [state, setstate] = useState(defaultState);

  const UpdateCheckList=()=>{
    setstate({Segment: {
      Economy: [
        {
          title: "Earning",
          NumInput: "Amount",
          TxtInput: "Source",
          type: "FVP",
        },
        {
          title: "Spending",
          NumInput: "Amount",
          TxtInput: "Field",
          type: "FVP",
        },
      ],
      Relegious: [
        {
          title: "Good Work",
          NumInput: "Amount",
          TxtInput: "Source",
          type: "FVP",
        },
        {
          title: "Bad Work",
          NumInput: "Amount",
          TxtInput: "Field",
          type: "FVP",
        },
        {
          title: "Prayer",
          list: [
            { title: "Fajar", checked: true },
            { title: "Johor", checked: true },
            { title: "Asar", checked: true },
            { title: "Magreb", checked: true },
            { title: "Esha", checked: true },
          ],
          type: "CL",
        },
      ],
    },})
    console.log("update")
  }

  return (
    <PageContext.Provider value={{state,UpdateCheckList}}>{props.children}</PageContext.Provider>
  );
};

export default PageState;
