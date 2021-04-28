import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";

import "./App.css";
import Form from "./component/Form";
import PaymentStatus from "./component/PaymentStatus";

const App = () => {
  const [transaction, setTransaction] = useState();

  const cekStatus = () => {
    fetch("http://localhost:9000/testApi")
      .then((response) => response.json())
      .then((response) => setTransaction(response));
  };

  useEffect(() => {
    cekStatus();
  }, []);

  console.log(transaction);

  return (
    <Switch>
      <div className="App">
        <Route path="/" exact component={Form} />
        <Route
          path="/payment"
          exact
          component={() => <PaymentStatus transaction={transaction} />}
        />
      </div>
    </Switch>
  );
};

export default App;
