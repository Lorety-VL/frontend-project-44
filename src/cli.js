import readlineSync from 'readline-sync';

const whatYouName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
};
export { whatYouName };
