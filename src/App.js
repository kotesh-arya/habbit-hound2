import "./App.css";

import { Routes, Route } from "react-router-dom";
import { SignIn } from "./Pages/Signin";
import { SignUp } from "./Pages/Signup";
import { RequiresAuth } from "./RequiresAuth";
import { Home } from "./Pages/Home";
import { Labels } from "./Pages/Labels";
import { Archive } from "./Pages/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
