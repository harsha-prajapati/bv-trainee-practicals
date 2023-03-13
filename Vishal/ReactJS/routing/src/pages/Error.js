import React from "react";
import Navigation from "../components/Navigation";
import img from "./404.jpg";
const Error = () => {
  return (
    <main>
      <h1>An Error Occured!!!</h1>
      <p>Can Not Find the Page</p>
      <img src={img} alt="404" />
    </main>
  );
};

export default Error;
