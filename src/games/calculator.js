import gameStart from '../index.js';
import getRandomNum from '../random.js';

const rule = 'What is the result of the expression?';

const resultOfExpression = () => {
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNum(0, 2)];
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const calculate = (a, b, oper) => {
    if (oper === '+') return a + b;
    if (oper === '-') return a - b;
    if (oper === '*') return a * b;
    throw new Error(`Unknown operator: ${oper}`);
  };
  const result = calculate(num1, num2, randomOperator);
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};
const startCalcGame = () => gameStart(rule, resultOfExpression);

export default startCalcGame;
