import { BufferAttribute, BufferGeometry, PerspectiveCamera, Points, RawShaderMaterial, Vector2, Vector3 } from 'three';
import fs from './glsl/NodePoints.fs';
import vs from './glsl/NodePoints.vs';
import { convertDegreesToRadians, getViewSize } from './helpers';

const NUM = 100;
const R = new Vector2();
const V = new Vector3();
const A = new Vector3();

export class NodePoints extends Points {
  constructor(camera: PerspectiveCamera) {
    // Define Geometry
    const geometry = new BufferGeometry();

    const baPositions = new BufferAttribute(new Float32Array(NUM * 3), 3);
    const baAccelerations = new BufferAttribute(new Float32Array(NUM * 3), 3);
    const baSizes = new BufferAttribute(new Float32Array(NUM), 1);

    getViewSize(camera, R);

    for (let i = 0; i < NUM; i++) {
      baPositions.setXYZ(i, R.x * (Math.random() - 0.5), R.y * (Math.random() - 0.5), 0);
      const size = Math.random() * 6 + 1;
      const rads = convertDegreesToRadians(Math.random() * 360);
      baAccelerations.setXYZ(i, Math.cos(rads) * (0.1 - size * 0.01), Math.sin(rads) * (0.1 - size * 0.01), 0);
      baSizes.setX(i, size);
    }

    geometry.setAttribute('position', baPositions);
    geometry.setAttribute('acceleration', baAccelerations);
    geometry.setAttribute('size', baSizes);

    // Define Material
    const material = new RawShaderMaterial({
      uniforms: {
        time: {
          value: 0,
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
      depthTest: false,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'NodePoints';
  }

  update(camera: PerspectiveCamera) {
    getViewSize(camera, R);

    for (let i = 0; i < NUM; i++) {
      V.set(
        this.geometry.attributes.position.getX(i),
        this.geometry.attributes.position.getY(i),
        this.geometry.attributes.position.getZ(i),
      );
      A.set(
        this.geometry.attributes.acceleration.getX(i),
        this.geometry.attributes.acceleration.getY(i),
        this.geometry.attributes.acceleration.getZ(i),
      );

      V.add(A);

      if (V.x >= R.x * 0.6) {
        V.x = -R.x * 0.6;
      } else if (V.x < R.x * -0.6) {
        V.x = R.x * 0.6;
      }
      if (V.y >= R.y * 0.6) {
        V.y = -R.y * 0.6;
      } else if (V.y < R.y * -0.6) {
        V.y = R.y * 0.6;
      }

      this.geometry.attributes.position.setXYZ(i, V.x, V.y, V.z);
      this.geometry.attributes.acceleration.setXYZ(i, A.x, A.y, A.z);
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.acceleration.needsUpdate = true;
  }
}
