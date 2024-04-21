import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
  const result = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

const startGcdGame = () => gameStart(rule, findGcd);

export default startGcdGame;
