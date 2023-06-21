//  background-color: #282c34;
// import Login from "./components/Login";
// import Login2 from "./components/Login2";
// import Login3 from "./components/Login3";
// import Mytry from "./components/mytry";
import Home from "./pages/Home"
import About from "./pages/About";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="grid gap-10 md:gap-0">
      {/* <Login2 /> */}
      {/* <Login /> */}
      {/* < Login3 /> */}
      {/* <Mytry/> */}
        <Routes>
            <Route path='/jkk' Component={Home} />
            <Route path="/about" element={<About/>} /> 
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
