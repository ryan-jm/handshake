import React from "react";
import "@elastic/eui/dist/eui_theme_dark.css";
import { EuiProvider } from "@elastic/eui";

function App() {
  return (
    <EuiProvider colorMode="dark">
      <div className="App"></div>
    </EuiProvider>
  );
}

export default App;
