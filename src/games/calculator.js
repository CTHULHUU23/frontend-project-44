import gameStart from '../index.js';
import getRandomNum from '../random.js';

const rule = 'What is the result of the expression?';

const calculate = (a, b, oper) => {
  if (oper === '+') return a + b;
  if (oper === '-') return a - b;
  if (oper === '*') return a * b;
  throw new Error(`Unknown operator: ${oper}`);
};

const resultOfExpression = () => {
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNum(0, operator.length - 1)];
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculate(num1, num2, randomOperator);
  return [question, `${correctAnswer}`];
};
const startCalcGame = () => gameStart(rule, resultOfExpression);

export default startCalcGame;
