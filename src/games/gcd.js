import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return (a % b) ? getGcd(b, a % b) : Math.abs(b);
};

const findGcd = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, `${correctAnswer}`];
};

const startGcdGame = () => gameStart(rule, findGcd);

export default startGcdGame;
