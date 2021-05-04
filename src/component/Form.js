import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import classes from "./styles.module.css";

const Form = () => {
  const history = useHistory();
  const [data, setData] = useState({
    nama: "",
    email: "",
    telp: "",
    payment: "bank_transfer",
    nominal: "",
    bank: "",
    order_id: `order-${Date.now()}`,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const customerData = {
      payment_type: data.payment,
      transaction_details: {
        order_id: data.order_id,
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
    axios
      .post("http://localhost:9000/snap", customerData)
      .then((res) => {
        console.log(res);

        const url = res.data.redirect_url;
        history.push("/payment", data.order_id);
        // window.location.replace(url);
        window.open(url, "_blank");
      })
      .catch((err) => console.log(err));
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
