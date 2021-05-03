import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useQuery } from "react-router-dom";

const PaymentStatus = () => {
  const history = useHistory();
  const query = () => new URLSearchParams(history.location.search);
  const q = query();
  const id = q.get("order_id");

  // const { transaction } = props;
  // const data = props && transaction;
  // const id = history.location.state && history.location.state;
  const [transaction, setTransaction] = useState();
  // console.log(query);

  // const cekStatus = useCallback(() => {
  //   fetch("http://localhost:9000/testApi/" + id)
  //     .then((response) => response.json())
  //     .then((response) => setTransaction(response))
  //     .catch((err) => console.log(err));
  // }, [id]);

  useEffect(() => {
    console.log("2");
    fetch("http://localhost:9000/testApi/" + id)
      .then((response) => response.json())
      .then((response) => setTransaction(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Detail Transaksi</h3>
      {transaction ? (
        <>
          <p>{`Id transaksi: ${transaction.transaction_id}`}</p>
          <p>{`Status: ${transaction.transaction_status}`}</p>
          <p>{`Total bayar:${transaction.gross_amount}`}</p>
          <p>{`Bank: ${transaction.va_numbers[0].bank}`}</p>
          <p>{`Virtual Account: ${transaction.va_numbers[0].va_number}`}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentStatus;
