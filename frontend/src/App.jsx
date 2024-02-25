import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Landing } from "./pages/Landing";
import { ConvertAndChat } from "./pages/ConvertAndChat";
import { Teams } from "./pages/Teams";
import { Documents } from "./pages/Documents";
import { Planner } from "./pages/Planner";
import { PreapareWtihTeam } from "./pages/PrepareWithTeam";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/convert-and-chat" element={<ConvertAndChat />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/prepare-with-team" element={<PreapareWtihTeam />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
