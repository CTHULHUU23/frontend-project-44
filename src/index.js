import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

const startGame = (rule, game) => {
  const userName = greetingUser();
  console.log(rule);
  const rounds = 3;
  for (let correctAnswersCount = 0; correctAnswersCount < rounds; correctAnswersCount += 1) {
    const [question, correctAnswer] = game();
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

export default startGame;
