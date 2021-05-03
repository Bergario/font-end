import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CekStatus = () => {
  const history = useHistory();
  // const [id, setId] = useState();
  // const onChangeHanlder = (e) => {
  //   const id = e.target.value;
  //   setId(id);
  //   console.log(id);
  // };

  // const CekStatusHandler = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:9000/testApi/" + id)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const orderId = response.order_id;
  //       console.log(response);
  //       history.push("/payment", orderId);
  //     });
  // };

  const ongkir = () => {
    fetch("http://localhost:9000/ongkir", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // history.push("/payment", orderId);
      });
  };

  return (
    <div>
      {/* <form onSubmit={(e) => CekStatusHandler(e)}> */}
      <form onSubmit={() => ongkir()}>
        <input type="text" name="id" /*onChange={onChangeHanlder}*/ />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => ongkir()}>cek</button>
    </div>
  );
};

export default CekStatus;
