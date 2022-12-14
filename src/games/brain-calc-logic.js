import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameCalc = () => {
  const gameIntro = 'What is the result of the expression?';

  const gameCalcLogic = () => {
    const number1 = giveRandomNumber(100);
    const number2 = giveRandomNumber(100);

    const operators = ['+', '-', '*'];
    const operator = operators[giveRandomNumber(3)];
    const questExpression = `${number1} ${operator} ${number2}`;
    let rightAnswer;

    switch (operator) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      default:
        rightAnswer = number1 * number2;
        break;
    }
    console.log(operator);
    rightAnswer = String(rightAnswer);
    return ([questExpression, rightAnswer]);
  };
  commonLogic(gameIntro, gameCalcLogic);
};

export default gameCalc;
