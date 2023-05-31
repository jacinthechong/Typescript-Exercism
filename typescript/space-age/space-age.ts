interface PlanetTime {
  [planet: string]: number;
}

const planetYears: PlanetTime = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 31557600,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export function age(planet: string, seconds: number): number {
  if (planet === 'earth') {
    return Number((seconds / planetYears['earth']).toFixed(2));
  }
  return Number(((seconds / planetYears['earth']) / planetYears[planet]).toFixed(2));
}
