import React, { Component } from "react";
import LoginPage from "./components/Form";

const App = () => {
  return (
    <div>
      <LoginPage />
      <p>
        <button onClick={methodDoesNotExist}>Break the world</button>
      </p>
    </div>
  );
};

export default App;
