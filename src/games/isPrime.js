import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeOrNot = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => gameStart(rule, primeOrNot);

export default startPrimeGame;
