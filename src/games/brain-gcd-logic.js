import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameGcd = () => {
  const gameIntro = 'Find the greatest common divisor of given numbers.';

  const gameGcdLogic = () => {
    const number1 = giveRandomNumber(100);
    const number2 = giveRandomNumber(100);

    const questNums = `${number1} ${number2}`;

    const getGcd = (numberLocal1, numberLocal2) => {
      if (numberLocal2 === 0) {
        return numberLocal1;
      }
      return getGcd(numberLocal2, numberLocal1 % numberLocal2);
    };
    let rightAnswer = getGcd(number1, number2);
    rightAnswer = String(rightAnswer);
    return ([questNums, rightAnswer]);
  };
  commonLogic(gameIntro, gameGcdLogic);
};

export default gameGcd;
