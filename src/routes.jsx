import React from "react";
import Landing from "./components/landing";
import Progress from "./components/progress";
import SelectTest from "./components/SelectTest";
import Encounter from "./components/Encounter";
import Instruction from "./components/Instruction";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import Drag from "./components/dnd/Drag";
function routes() {
 return (
  <div>
   <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/progress" element={<Progress/>} />
    <Route path="/select" element={<SelectTest/>} />
    <Route path="/encounter" element={<Encounter/>} />
    <Route path="/instruction" element={<Instruction/>} />
    <Route path="/drag" element={<Drag/>} />
    <Route path="/slider" element={<Slider/>} />
   </Routes>
  </div>
 );
}

export default routes;
