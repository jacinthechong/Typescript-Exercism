export function score(x: number, y: number): number {
  let radius: number = Math.sqrt(x ** 2 + y ** 2);
  if (radius <= 1) {
    return 10;
  } else if (radius <= 5) {
    return 5;
  } else if (radius <= 10) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * - If the dart lands outside the target, player earns no points (0 points).
- If the dart lands in the outer circle of the target, player earns 1 point.
- If the dart lands in the middle circle of the target, player earns 5 points.
- If the dart lands in the inner circle of the target, player earns 10 points.

The outer circle has a radius of 10 units (this is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1.
Of course, they are all centered at the same point — that is, the circles are [concentric][] defined by the coordinates (0, 0).
 */

//using math - pythagorean theorem to find hypotenuse of coordinates from center
