import React, { useState } from "react";

import classes from "./styles.module.css";

const Form = () => {
  const [data, setData] = useState({
    nama: "",
    email: "",
    telp: "",
    payment: "bank_transfer",
    nominal: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
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
          <option value="bca">BCA</option>
          <option value="bni">BNI</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
