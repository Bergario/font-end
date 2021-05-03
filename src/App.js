import React from "react";
import { Switch, Route } from "react-router";

import "./App.css";
import CekStatus from "./component/CekStatus";
import Form from "./component/Form";
import PaymentStatus from "./component/PaymentStatus";

const App = () => {
  return (
    <div className="App">
      <Route path="/" exact component={Form} />
      <Route path="/cek" exact component={CekStatus} />
      <Route path="/payment" exact component={PaymentStatus} />
    </div>
  );
};

export default App;
