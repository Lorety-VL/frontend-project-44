import commonLogic from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameIntro = 'What number is missing in the progression?';

const giveProgression = (length) => {
  const firstNumber = getRandomInRange(0, 20);
  const incrementor = getRandomInRange(1, 20);
  const progression = [firstNumber];

  for (let i = 1; i < length; i += 1) {
    progression.push(firstNumber + incrementor * i);
  }
  return progression;
};

const gameProgressionLogic = () => {
  const arrayLength = 8;
  const missingNumberPosition = getRandomInRange(0, 7);
  let questProgression = giveProgression(arrayLength);

  let rightAnswer = questProgression[missingNumberPosition];
  questProgression[missingNumberPosition] = '..';

  questProgression = questProgression.join(' ');
  rightAnswer = String(rightAnswer);
  return ([questProgression, rightAnswer]);
};

export default () => commonLogic(gameIntro, gameProgressionLogic);
