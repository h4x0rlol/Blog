import { Clock, PerspectiveCamera, Scene, Vector2, Vector3, WebGLRenderer } from 'three';
import { NodeLine } from './NodeLine';
import { NodePoints } from './NodePoints';

export class WebGLContent {
  canvas;
  renderer;
  scene;
  camera;
  clock;
  resolution;
  nodePoints: NodePoints | null = null;
  nodeLine: NodeLine | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: this.canvas,
    });

    this.resolution = new Vector2();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera();
    this.clock = new Clock(false);
  }

  async init() {
    this.resize();

    this.renderer.setClearColor(0x15232d, 1.0);

    this.camera.far = 1000;
    this.camera.setFocalLength(50);
    this.camera.position.set(0, 0, 50);
    this.camera.lookAt(new Vector3());

    this.nodePoints = new NodePoints(this.camera);
    this.nodeLine = new NodeLine();

    this.scene.add(this.nodePoints);
    this.scene.add(this.nodeLine);

    this.clock.start();
    this.render();
  }

  resizeCamera(camera: PerspectiveCamera, resolution: Vector2) {
    camera.aspect = resolution.x / resolution.y;
    camera.updateProjectionMatrix();
  }

  update() {
    // When the clock is stopped, it stops the all rendering too.
    if (this.clock.running === false) return;

    // Update each objects.
    if (this.nodePoints && this.nodeLine) {
      this.nodePoints.update(this.camera);
      this.nodeLine.update(this.nodePoints, this.camera);
    }

    // Render the 3D scene.
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.resolution.set(window.innerWidth, window.innerHeight);
    this.resizeCamera(this.camera, this.resolution);
    this.renderer.setSize(this.resolution.x, this.resolution.y);
  }

  render() {
    this.update();
    requestAnimationFrame(() => this.render());
  }
}
