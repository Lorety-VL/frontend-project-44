import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameGcd = () => {
  const gameIntro = 'Find the greatest common divisor of given numbers.';

  const gameGcdLogic = () => {
    const number1 = giveRandomNumber(100);
    const number2 = giveRandomNumber(100);

    const questNums = `${number1} ${number2}`;

    const getGcd = (numberLocal1, numberLocal2) => {
      let num1 = numberLocal1;
      let num2 = numberLocal2;
      while (num1 && num2) {
        if (num1 > num2) {
          num1 %= num2;
        } else {
          num2 %= num1;
        }
      }
      return (num1 + num2);
    };

    const rightAnswer = String(getGcd(number1, number2));
    return ([questNums, rightAnswer]);
  };
  commonLogic(gameIntro, gameGcdLogic);
};

export default gameGcd;
