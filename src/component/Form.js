import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input onChange={(e) => console.log(e.target.value)}></input>
      </form>
    </div>
  );
};

export default Form;
