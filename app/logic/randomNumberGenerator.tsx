export function randomGenerationOfNumber(): number {
  const randomPosition = Math.floor(Math.random() * 15);
  return randomPosition;
}

export function twoOrFourReturner() {
  const aNumber = Math.random();
  if (aNumber >= 0.5) {
    return 4;
  } else {
    return 2;
  }
}

export function RandomNumberGenerate() {
  return <span>2</span>;
}
