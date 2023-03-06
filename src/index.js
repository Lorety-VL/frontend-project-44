import readlineSync from 'readline-sync';

const commonLogic = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default commonLogic;
