import React from "react";
import Routes from "./routes";
import './components/index.css'
import {UserContextProvider} from './components/context/UserContext'
function App() {
 return (
  <div className="App">
  <UserContextProvider>
  <Routes />
  </UserContextProvider>
  </div>
 );
}

export default App;
