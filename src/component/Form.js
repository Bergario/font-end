import React, { useState } from "react";

import classes from "./styles.module.css";

const Form = () => {
  const [data, setData] = useState({
    // customer_detail: {
    nama: "",
    email: "",
    telp: "",
    payment: "bank_transfer",
    nominal: "",
    bank: "",
    // },
    // bank_transfer: {
    //   bank: "bca",
    // },
    // payment_type: "bank_transfer",
    // transaction_details: {
    //   order_id: "order-105",
    //   gross_amount: 280000,
    // },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    const customerData = {
      payment_type: data.payment,
      transaction_details: {
        order_id: "order-105",
        gross_amount: data.nominal,
      },
      bank_transfer: {
        bank: data.bank,
      },
      customer_details: {
        first_name: data.nama,
        email: data.email,
        phone: data.telp,
      },
    };
    console.log(customerData);
  };

  const changeHanlder = (e) => {
    const { name, value } = e.target;
    setData((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  return (
    <div className={classes.Form}>
      <h3>Form Shipping</h3>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="nama"
          placeholder="Name"
          value={data.nama}
          onChange={changeHanlder}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={changeHanlder}
        />
        <input
          type="text"
          name="telp"
          placeholder="Telp"
          value={data.telp}
          onChange={changeHanlder}
        />
        <input
          type="text"
          name="nominal"
          placeholder="Nominal"
          value={data.nominal}
          onChange={changeHanlder}
        />
        <select name="bank" onChange={changeHanlder}>
          <option value="bca">pilih bank</option>
          <option value="bca">BCA</option>
          <option value="bni">BNI</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
