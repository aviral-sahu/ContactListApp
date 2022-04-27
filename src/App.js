import React from "react";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
