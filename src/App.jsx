
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { WaveBackground } from "./components";


function App() {
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WaveBackground />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
