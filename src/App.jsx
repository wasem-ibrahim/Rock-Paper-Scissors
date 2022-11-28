import React from "react";
import { Main, Images, Welcoming } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcoming />}></Route>
        <Route path="main" element={<Main />}></Route>
      </Routes>
      {/* <Main /> */}
    </>
  );
}

export default App;
