import getRandomNum from '../random.js';
import gameStart from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const generateEvenQuestion = () => {
  const question = getRandomNum();
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => gameStart(rule, generateEvenQuestion);

export default startEvenGame;
