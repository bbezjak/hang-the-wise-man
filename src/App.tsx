// import logo from './logo.svg';
import { useSelector } from "react-redux";
import { EnterPlayerName } from "./pages/EnterPlayerName";
import { PlayHangman } from "./pages/PlayHangman";

import "./App.sass";

const App = () => {
  const store = useSelector((state: any) => state.mode);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      {store === "REGISTER" && <EnterPlayerName />}
      {store === "GAME" && <PlayHangman></PlayHangman>}
      {store === "HIGHSCORE" && <h1>Highscore</h1>}
    </>
  );
};

export default App;
