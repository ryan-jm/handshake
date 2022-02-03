import React from "react";
import "@elastic/eui/dist/eui_theme_dark.css";
import { EuiProvider } from "@elastic/eui";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Header from "./components/Header";
import Error from "./containers/Error";
import "./styles/globals.scss";

function App() {
  return (
    <EuiProvider colorMode="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </EuiProvider>
  );
}

export default App;
