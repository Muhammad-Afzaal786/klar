import React from "react";
import Landing from "./components/Landing/landing";
import Progress from "./components/progressRange/progress";
import SelectTest from "./components/selectable/SelectTest";
import Encounter from "./components/encounter/Encounter";
import Instruction from "./components/Pinstruction/Instruction";
import Slider from "./components/progressRange/Slider";
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
