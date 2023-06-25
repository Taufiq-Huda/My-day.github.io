import "./App.css";
import NavBar from "./components/NavBar";
import PageHead from "./components/PageHead";
import Segment from "./components/Segment";

import Checklist from "./components/Checklist";
import PageState from "./contex/NewPage/PageState";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex container justify-content-center my-5">
        <div className="d-flex flex-column my-3">
          <PageHead />
          <PageState>
            {/* <div>{a.state}</div> */}
            <form action="welcome_get.php" method="get">
              <Segment title="Economy"/>
              <Segment title="Relegious"/>
              {/* <div className="input-group">
              <span className="input-group-text">Dairy</span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div> */}
            </form>
          </PageState>
        </div>
      </div>
    </div>
  );
}

export default App;
