import readlineSync from 'readline-sync';
import getRandomNum from '../random.js';
import greetingUser from '../cli.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const isEven = () => {
  const question = getRandomNum();
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const rounds = 3;
const parityCheck = () => {
  const userName = greetingUser();
  console.log(rule);

  for (let correctAnswersCount = 0; correctAnswersCount < rounds; correctAnswersCount += 1) {
    const [question, correctAnswer] = isEven();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default parityCheck;
