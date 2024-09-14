import { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  SceneLoader,
} from "@babylonjs/core";
export default function Main() {
  const reactCanvas = useRef(null);

  useEffect(() => {
    const { current: canvas } = reactCanvas;
    if (!canvas) {
      return;
    } else {
      canvas.width = 0.9 * window.innerWidth;
      canvas.height = 0.9 * window.innerHeight;
      const engine = new Engine(canvas, true);
      const scene = new Scene(engine);
      const camera = new ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2.5,
        3,
        new Vector3(0, 0, 0),
        scene,
      );
      camera.attachControl(canvas, true);
      const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
      const box = MeshBuilder.CreateBox("box", {}, scene);
      SceneLoader.ImportMeshAsync(
        "semi_house",
        "https://assets.babylonjs.com/meshes/",
        "both_houses_scene.babylon",
      ).then((res) => {
        const semiHouse = res.meshes[0];
        semiHouse.position.z = 3;
        semiHouse.rotation.y = Math.PI / 3;
      });
      engine.runRenderLoop(() => {
        scene.render();
      });
      window.addEventListener("resize", () => {
        engine.resize();
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={reactCanvas} />
    </div>
  );
}
