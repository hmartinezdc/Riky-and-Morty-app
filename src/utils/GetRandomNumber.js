export const getRandomNumber = (min, max) => {
  const aplitude = max - min;
  const aplitudeRandom = Math.random() * aplitude;
  return min + Math.round(aplitudeRandom);
};
