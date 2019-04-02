import "./App.css";
import React from "react";
import MemberList from "./MemberList";
import MemberDetail from "./MemberDetail";
import Banner from "./Banner";

const App = () => {
  return (
    <div className="ui">
      <Banner />
      <div className="ui vertical stripe segment members-grid">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="twelve wide column">
              <MemberList />
            </div>
            <div className="four wide right floated column">
              <MemberDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
