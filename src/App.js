import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./component/Form";

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

  const Data = transaction && (
    <>
      <p>{`Id transaksi: ${transaction.transaction_id}`}</p>
      <p>{`Status: ${transaction.transaction_status}`}</p>
      <p>{`Total bayar:${transaction.gross_amount}`}</p>
      <p>{`Bank: ${transaction.va_numbers[0].bank}`}</p>
      <p>{`Virtual Account: ${transaction.va_numbers[0].va_number}`}</p>
    </>
  );

  console.log(Data);

  return (
    <div className="App">
      <h1>Selamat Datang!!</h1>
      <h3>{`Detail Transaksi`}</h3>
      {Data}
      <button onClick={() => cekStatus()}>Refresh</button>
      <Form />
    </div>
  );
};

export default App;
