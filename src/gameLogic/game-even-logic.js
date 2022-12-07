import readlineSync from 'readline-sync';
import giveRandomNumber from '../giveRandomNumber.js';

const gameEvenLogic = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const questNum = giveRandomNumber(100);
    console.log(`Question: ${questNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = questNum % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default gameEvenLogic;
