import commonLogic from '../index.js';
import giveRandomNumber from '../giveRandomNumber.js';

const gamePrime = () => {
  const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gamePrimeLogic = () => {
    const questNumber = giveRandomNumber(98) + 2;
    const isPrime = (questNumberLocal) => {
      let countOfDel = 0;
      for (let i = 1; i <= Math.round(questNumberLocal / 2); i += 1) {
        if (questNumberLocal % i === 0) {
          countOfDel += 1;
        }
        if (countOfDel > 1) {
          return ('no');
        }
      }
      return ('yes');
    };
    const rightAnswer = isPrime(questNumber);
    return ([questNumber, rightAnswer]);
  };
  commonLogic(gameIntro, gamePrimeLogic);
};

export default gamePrime;
