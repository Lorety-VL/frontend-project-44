import commonLogic from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (
  number % 2 === 0 ? 'yes' : 'no'
);

const gameEvenLogic = () => {
  const questNum = getRandomInRange(1, 100);
  const rightAnswer = isEven(questNum);
  return ([questNum, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameEvenLogic);
