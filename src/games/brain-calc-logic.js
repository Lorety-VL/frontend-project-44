import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameCalc = () => {
  const gameIntro = 'What is the result of the expression?';

  const gameEvenLogic = () => {
    const number1 = giveRandomNumber(100);
    const number2 = giveRandomNumber(100);

    const operators = ['+', '-', '*'];
    const operator = operators[giveRandomNumber(2)];
    const questExpression = `${number1} ${operator} ${number2}`;
    let rightAnswer;

    switch (operator) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      case '*':
        rightAnswer = number1 * number2;
        break;
      default:
        rightAnswer = null;
        break;
    }
    rightAnswer = String(rightAnswer);
    return ([questExpression, rightAnswer]);
  };
  commonLogic(gameIntro, gameEvenLogic);
};

export default gameCalc;