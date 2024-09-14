import "./App.css";
import React from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";
import SceneComponent from "./babylon/SceneComponent";
function App() {
  return (
    <>
      <SceneComponent />
    </>
  );
}

export default App;
