import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aadhar from "./Aadhar";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Aadhar user={user} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
