import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gameProgression = () => {
  const gameIntro = 'What number is missing in the progression?';

  const gameProgressionLogic = () => {
    const arrayLength = 8;
    const missingNumberPosition = giveRandomNumber(7);
    const firstNumber = giveRandomNumber(20);
    const incrementor = giveRandomNumber(19) + 1;
    let questProgression = [firstNumber];

    for (let i = 1; i < arrayLength; i += 1) {
      questProgression.push(firstNumber + incrementor * i);
    }
    let rightAnswer = questProgression[missingNumberPosition];
    questProgression[missingNumberPosition] = '..';

    questProgression = questProgression.join(' ');
    rightAnswer = String(rightAnswer);
    return ([questProgression, rightAnswer]);
  };
  commonLogic(gameIntro, gameProgressionLogic);
};

export default gameProgression;
