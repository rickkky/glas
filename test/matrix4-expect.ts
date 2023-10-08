import { expect } from 'vitest';
import { expectVector4 } from './vector4-expect';
import { Matrix4 } from '/src';

export const expectMatrix4 = (m: Matrix4, target: number[]) => {
  expect(m.dimension).toBe(4);
  expectVector4(m[0], [target[0], target[1], target[2], target[3]]);
  expectVector4(m[1], [target[4], target[5], target[6], target[7]]);
  expectVector4(m[2], [target[8], target[9], target[10], target[11]]);
  expectVector4(m[3], [target[12], target[13], target[14], target[15]]);
};
