import React from "react";

const PaymentStatus = (props) => {
  const { transaction } = props;
  console.log(props);
  const data = props && transaction;
  return (
    <div>
      {transaction && (
        <>
          <h3>Transaksi Detail</h3>
          <p>{`Id transaksi: ${data.transaction_id}`}</p>
          <p>{`Status: ${data.transaction_status}`}</p>
          <p>{`Total bayar:${data.gross_amount}`}</p>
          <p>{`Bank: ${data.va_numbers[0].bank}`}</p>
          <p>{`Virtual Account: ${data.va_numbers[0].va_number}`}</p>
        </>
      )}
    </div>
  );
};

export default PaymentStatus;
