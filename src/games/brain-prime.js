import commonLogic from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questNumberLocal) => {
  let countOfDel = 0;
  const optimalBorder = Math.round(questNumberLocal / 2);
  for (let i = 1; i <= optimalBorder; i += 1) {
    if (questNumberLocal % i === 0) {
      countOfDel += 1;
    }
    if (countOfDel > 1) {
      return ('no');
    }
  }
  return ('yes');
};

const gamePrimeLogic = () => {
  const questNumber = getRandomInRange(2, 100);
  const rightAnswer = isPrime(questNumber);
  return ([questNumber, rightAnswer]);
};

export default () => commonLogic(gameIntro, gamePrimeLogic);
