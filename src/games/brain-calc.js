import commonLogic from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameIntro = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Operator {operator} - is incorrect!');
  }
};

const gameCalcLogic = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInRange(0, 2)];
  const questExpression = `${number1} ${operator} ${number2}`;

  let rightAnswer = calculation(number1, number2, operator)
  rightAnswer = String(rightAnswer);
  return ([questExpression, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameCalcLogic);
