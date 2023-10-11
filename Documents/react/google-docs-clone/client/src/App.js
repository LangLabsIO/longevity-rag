import React, { useEffect } from "react";
import TextEditor from "./components/TextEditor";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`/documents/${uuidv4()}`);
    }
  }, [location]);
  return (
    <Routes>
      {/* <Redirect from="/" to={`/documents/${uuidv4()}`} /> */}
      <Route path="/documents/:id"  element={<TextEditor/>} />

    </Routes>

  );
}

export default App;
