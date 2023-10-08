import { Matrix4 } from './matrix4';
import { VectorArgs } from './vector-base';
import { createVectorStatics } from './vector-static';
import { Vector2 } from './vector2';
import { Vector3 } from './vector3';
import { Vector4Base } from './vector4-base';

export class Vector4 extends Vector4Base {
  constructor();
  constructor(x: number, y: number, z: number, w: number);
  constructor(nums: number[]);
  constructor(v: Vector4);
  constructor(xyz: Vector3, w: number);
  constructor(x: number, yzw: Vector3);
  constructor(xy: Vector2, zw: Vector2);
  constructor(xy: Vector2, z: number, w: number);
  constructor(x: number, yz: Vector2, w: number);
  constructor(x: number, y: number, zw: Vector2);
  constructor(...args: VectorArgs);
  constructor(...args: VectorArgs) {
    super(...args);
  }

  get dimension(): 4 {
    return 4;
  }

  set(): this;
  set(x: number, y: number, z: number, w: number): this;
  set(nums: number[]): this;
  set(v: Vector4): this;
  set(xyz: Vector3, w: number): this;
  set(x: number, yzw: Vector3): this;
  set(xy: Vector2, zw: Vector2): this;
  set(xy: Vector2, z: number, w: number): this;
  set(x: number, yz: Vector2, w: number): this;
  set(x: number, y: number, zw: Vector2): this;
  set(...args: VectorArgs): this;
  set(...args: VectorArgs) {
    return super.set(...args);
  }

  transform(m: Matrix4, target?: this) {
    return super.transform(m, target);
  }
}

interface CreateVector4 {
  (): Vector4;
  (x: number, y: number, z: number, w: number): Vector4;
  (nums: number[]): Vector4;
  (v: Vector4): Vector4;
  (xyz: Vector3, w: number): Vector4;
  (x: number, yzw: Vector3): Vector4;
  (xy: Vector2, zw: Vector2): Vector4;
  (xy: Vector2, z: number, w: number): Vector4;
  (x: number, yz: Vector2, w: number): Vector4;
  (x: number, y: number, zw: Vector2): Vector4;
  (...args: VectorArgs): Vector4;
}

const createVector4: CreateVector4 = (...args: VectorArgs) =>
  new Vector4(...args);

export const vec4 = Object.assign(
  createVector4,
  createVectorStatics<Vector4, Matrix4>(Vector4),
);
