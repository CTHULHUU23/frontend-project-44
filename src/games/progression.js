import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'What number is missing in the progression?';

const generateArithmeticProgression = (startValue, increment, count) => {
  const accumulatedSum = [];
  let value = startValue;
  for (let i = 0; i < count; i += 1) {
    accumulatedSum.push(value);
    value += increment;
  }

  return accumulatedSum;
};

const findMissingNumberInProgression = () => {
  const minCount = 5;
  const maxCount = 10;
  const minValue = 1;
  const maxValue = 50;
  const minIncrement = 1;
  const maxIncrement = 10;
  const value = getRandomNum(minValue, maxValue);
  const count = getRandomNum(minCount, maxCount);
  const increment = getRandomNum(minIncrement, maxIncrement);
  const accumulatedSum = generateArithmeticProgression(value, increment, count);

  const randomIndex = getRandomNum(0, accumulatedSum.length - 1);
  const randomElement = accumulatedSum[randomIndex];
  accumulatedSum[randomIndex] = '..';
  const question = accumulatedSum.join(' ');
  const correctAnswer = randomElement;
  return [question, `${correctAnswer}`];
};

const startProgressionGame = () => gameStart(rule, findMissingNumberInProgression);

export default startProgressionGame;
