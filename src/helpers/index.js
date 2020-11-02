const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeNumbers = (max) => {
  const primes = [];

  for (let i = 2; i < max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const shuffle = (array) => {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export const generatePuzzles = () => {
  const numbers = generatePrimeNumbers(50);
  const duplicateNumbers = [...numbers, ...numbers];
  const mixedNumbers = shuffle(duplicateNumbers);
  const puzzles = mixedNumbers.map((number, index) => ({
    value: number,
    id: index,
  }));
  return puzzles;
};

export const getValueById = (puzzles, id) => {
  return puzzles.find((puzzle) => puzzle.id === id)?.value;
};

export const compareValues = (puzzles, selectedPuzzles) => {
  const val1 = getValueById(puzzles, selectedPuzzles[0]);
  const val2 = getValueById(puzzles, selectedPuzzles[1]);
  return val1 === val2;
};
