import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'What number is missing in the progression?';

const generateArithmeticProgression = () => {
  const count = getRandomNum(5, 10);
  let value = getRandomNum(1, 50);
  const increment = getRandomNum(1, 10);
  const accumulatedSum = [];
  let i = 1;

  while (i <= count) {
    accumulatedSum.push(value);
    value += increment;
    i += 1;
  }
  const randomElement = accumulatedSum[getRandomNum(0, accumulatedSum.length - 1)];
  const indexOfRandomElement = accumulatedSum.indexOf(randomElement);
  accumulatedSum[indexOfRandomElement] = '..';
  const question = accumulatedSum.join(' ');
  const correctAnswer = randomElement.toString();
  return [question, correctAnswer];
};

const startProgressionGame = () => gameStart(rule, generateArithmeticProgression);

export default startProgressionGame;
