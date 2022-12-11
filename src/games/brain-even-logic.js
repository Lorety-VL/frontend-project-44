import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameEven = () => {
  const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameEvenLogic = () => {
    const questNum = giveRandomNumber(100);
    const rightAnswer = questNum % 2 === 0 ? 'yes' : 'no';
    return ([questNum, rightAnswer]);
  };
  commonLogic(gameIntro, gameEvenLogic);
};

export default gameEven;
