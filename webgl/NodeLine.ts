import {
  BufferAttribute,
  BufferGeometry,
  LineSegments,
  PerspectiveCamera,
  RawShaderMaterial,
  Vector2,
  Vector3,
} from 'three';
import { NodePoints } from './NodePoints';
import fs from './glsl/NodeLine.fs';
import vs from './glsl/NodeLine.vs';
import { getViewSize } from './helpers';

const NUM = 1000;
const R = new Vector2();
const V1 = new Vector3();
const V2 = new Vector3();

export class NodeLine extends LineSegments {
  constructor() {
    // Define Geometry
    const geometry = new BufferGeometry();

    const baPositions = new BufferAttribute(new Float32Array(NUM * 3 * 2), 3);
    const baOpacity = new BufferAttribute(new Float32Array(NUM * 2), 1);
    const indices = [];

    for (let i = 0; i < NUM * 2; i++) {
      indices.push(i);
    }

    geometry.setAttribute('position', baPositions);
    geometry.setAttribute('opacity', baOpacity);
    geometry.setIndex(new BufferAttribute(new Uint16Array(indices), 1));

    // Define Material
    const material = new RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
      depthTest: false,
      linewidth: 1,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'NodeLine';
  }

  update(points: NodePoints, camera: PerspectiveCamera) {
    getViewSize(camera, R);

    let lineIndex = 0;
    for (let i = 0; i < points.geometry.attributes.position.count; i++) {
      for (let j = i + 1; j < points.geometry.attributes.position.count; j++) {
        V1.set(
          points.geometry.attributes.position.getX(i),
          points.geometry.attributes.position.getY(i),
          points.geometry.attributes.position.getZ(i),
        );
        V2.set(
          points.geometry.attributes.position.getX(j),
          points.geometry.attributes.position.getY(j),
          points.geometry.attributes.position.getZ(j),
        );

        const d = V1.distanceTo(V2);

        if (d < R.y * 0.15) {
          this.geometry.attributes.position.setXYZ(lineIndex * 2, V1.x, V1.y, V1.z);
          this.geometry.attributes.position.setXYZ(lineIndex * 2 + 1, V2.x, V2.y, V2.z);
          this.geometry.attributes.opacity.setXYZ(lineIndex * 2, 3 - d, 0, 0);
          this.geometry.attributes.opacity.setXYZ(lineIndex * 2 + 1, 3 - d, 0, 0);
          lineIndex++;
        }
        if (lineIndex >= NUM) continue;
      }
    }

    for (let k = (lineIndex + 1) * 2; k < this.geometry.attributes.position.count; k++) {
      this.geometry.attributes.position.setXYZ(k, 0, 0, 0);
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.opacity.needsUpdate = true;
  }
}
