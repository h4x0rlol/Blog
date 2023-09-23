import { PerspectiveCamera, Vector2 } from 'three';

export function getViewSize(camera: PerspectiveCamera, R: Vector2) {
  const fovInRadians = (camera.fov * Math.PI) / 180;
  const height = Math.abs(camera.position.z * Math.tan(fovInRadians / 2) * 2);
  R.set(height * camera.aspect, height);
}

export function convertDegreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}
