import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-y-auto content-center">
        <Home />
      </div>
    </div>
  </StrictMode>
);
