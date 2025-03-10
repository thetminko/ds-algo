import { visitPoints } from './visit-points';
import { test, expect } from 'vitest';

test('Function should exist', () => {
  expect(typeof visitPoints).toEqual('function');
});

test('Should return 7 for [[1,1],[3,4],[-1,0]]', () => {
  expect(visitPoints([[1,1],[3,4],[-1,0]])).toEqual(7);
});

test('Test large number input', () => {
  const points: [number, number][] = [
    [559, 511],
    [932, 618],
    [-623, -443],
    [431, 91],
    [838, -127],
    [773, -917],
    [-500, -910],
    [830, -417],
    [-870, 73],
    [-864, -600],
    [450, 535],
    [-479, -370],
    [856, 573],
    [-549, 369],
    [529, -462],
    [-839, -856],
    [-515, -447],
    [652, 197],
    [-83, 345],
    [-69, 423],
    [310, -737],
    [78, -201],
    [443, 958],
    [-311, 988],
    [-477, 30],
    [-376, -153],
    [-272, 451],
    [322, -125],
    [-114, -214],
    [495, 33],
    [371, -533],
    [-393, -224],
    [-405, -633],
    [-693, 297],
    [504, 210],
    [-427, -231],
    [315, 27],
    [991, 322],
    [811, -746],
    [252, 373],
    [-737, -867],
    [-137, 130],
    [507, 380],
    [100, -638],
    [-296, 700],
    [341, 671],
    [-944, 982],
    [937, -440],
    [40, -929],
    [-334, 60],
    [-722, -92],
    [-35, -852],
    [25, -495],
    [185, 671],
    [149, -452]
  ];

  const start = performance.now();
  visitPoints(points); // result does't matter
  const end = performance.now();
  const duration = end - start;


  expect(duration).toBeLessThan(50);
  console.log(`Test duration: ${duration}ms`);
});
