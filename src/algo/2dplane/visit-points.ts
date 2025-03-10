export function visitPoints(points: [number, number][]) {
  let seconds = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const currentPoint = points[i];
    const nextPoint = points[i + 1];
    seconds += Math.max(Math.abs(nextPoint[0] - currentPoint[0]), Math.abs(nextPoint[1] - currentPoint[1]));
  }

  return seconds;
}
