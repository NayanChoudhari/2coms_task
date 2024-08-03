import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import FileNotFound from "../components/FileNotFound";
import Protected from "./Protected";
import App from "../App";
import CameraAccess from "../components/CameraAccess";

const RouteIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <Protected redirectPath="/login">
              <App />
            </Protected>
          }
        />
        <Route
          exact
          path="/camera-access"
          element={
            <Protected redirectPath="/login">
              <CameraAccess />
            </Protected>
          }
        />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteIndex;
