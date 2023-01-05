import {
  WebGL1Renderer,
  Scene,
  PerspectiveCamera,
  Clock,
  Vector3,
} from "three";
import NodePoints from "./NodePoints";
import NodeLine from "./NodeLine";

export default class WebGLContent {
  constructor(canvas) {
    this.canvas = canvas;

    this.renderer = new WebGL1Renderer({
      alpha: true,
      antialias: true,
      canvas: this.canvas,
    });

    this.scene = new Scene();
    this.camera = new PerspectiveCamera();
    this.clock = new Clock({
      autoStart: false,
    });
  }

  async init(resolution) {
    this.renderer.setClearColor(0x15232d, 1.0);

    this.camera.aspect = 3 / 2;
    this.camera.far = 1000;
    this.camera.setFocalLength(50);
    this.camera.position.set(0, 0, 50);
    this.camera.lookAt(new Vector3());

    this.nodePoints = new NodePoints(this.camera);
    this.nodeLine = new NodeLine();

    this.scene.add(this.nodePoints);
    this.scene.add(this.nodeLine);

    this.resize(resolution);
  }

  resizeCamera(camera, resolution) {
    camera.aspect = resolution.x / resolution.y;
    camera.updateProjectionMatrix();
  }

  start() {
    this.play();
  }

  stop() {
    this.pause();
  }

  play() {
    this.clock.start();
  }

  pause() {
    this.clock.stop();
  }

  update() {
    // When the clock is stopped, it stops the all rendering too.
    if (this.clock.running === false) return;

    // Update each objects.
    this.nodePoints.update(this.camera);
    this.nodeLine.update(this.nodePoints, this.camera);

    // Render the 3D scene.
    this.renderer.render(this.scene, this.camera);
  }

  resize(resolution) {
    this.width = resolution.x;
    this.canvas.height = resolution.y;
    this.resizeCamera(this.camera, resolution);
    this.renderer.setSize(resolution.x, resolution.y);
  }
}
