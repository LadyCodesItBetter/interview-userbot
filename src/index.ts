import { FileProcessor } from './fileProcessor';
import { SingletonFileReader } from './singletonFileReader';
import readline from 'readline';

const getFilePathFromUser = (): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Please provide a file path or URL: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const processFile = async (filePath: string) => {
  try {
    const fileReader = SingletonFileReader.getInstance();
    const content = await fileReader.readFile(filePath);
    const processor = new FileProcessor(content);
    console.log(`Total words: ${processor.getTotalWords()}`);
    console.log(`Total letters: ${processor.getTotalLetters()}`);
    console.log(`Total spaces: ${processor.getTotalSpaces()}`);
    console.log(`Frequent words: `, processor.getFrequentWords(10));
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

const main = async () => {
  const filePath = process.argv[2] || await getFilePathFromUser();
  await processFile(filePath);
};

main();
