import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
 
      <Routes />
      <div className="social-buttons">
        <GitHubButton
          href="https://github.com/johnoseni1/A-simple-exchanger-swaping-using-uniswap-pancake-swap"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count={true}
          aria-label="Star on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/johnoseni1/A-simple-exchanger-swaping-using-uniswap-pancake-swap/fork"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Fork on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
