import './App.css';

import Main from "./components/main";
import Header from "./components/header";

// import { StoreProvider } from "./store";
import { HashRouter, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
