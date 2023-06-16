import "./App.css";
import NavBar from "./components/NavBar";
import PageHead from "./components/PageHead";
import Segment from "./components/Segment";

import Checklist from "./components/Checklist";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <PageHead />
        <form action="welcome_get.php" method="get">
        <Segment title="Economy"/>
        <Segment title="Relegious"/>
        
       <Checklist/>
        {/* <div className="input-group">
          <span className="input-group-text">Dairy</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div> */}
      </form> 
        </div>
      </div>
    </div>
  );
}

export default App;
