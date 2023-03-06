import commonLogic from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameIntro = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberLocal1, numberLocal2) => {
  if (numberLocal2 === 0) {
    return numberLocal1;
  }
  return getGcd(numberLocal2, numberLocal1 % numberLocal2);
};

const gameGcdLogic = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);

  const questNums = `${number1} ${number2}`;

  let rightAnswer = getGcd(number1, number2);
  rightAnswer = String(rightAnswer);
  return ([questNums, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameGcdLogic);
