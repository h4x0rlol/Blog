import * as THREE from "three";
import NodePoints from "./NodePoints";
import NodeLine from "./NodeLine";

export default class WebGLContent {
  constructor(canvas) {
    this.canvas = canvas;

    this.renderer = new THREE.WebGL1Renderer({
      alpha: true,
      antialias: true,
      canvas: this.canvas,
    });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.clock = new THREE.Clock({
      autoStart: false,
    });
  }

  async init(resolution) {
    this.renderer.setClearColor(0xffc600, 1.0);

    this.camera.aspect = 3 / 2;
    this.camera.far = 1000;
    this.camera.setFocalLength(50);
    this.camera.position.set(0, 0, 50);
    this.camera.lookAt(new THREE.Vector3());

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

    // Calculate msec for this frame.
    const time = this.clock.getDelta();

    // Update each objects.
    this.nodePoints.update(time, this.camera);
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
