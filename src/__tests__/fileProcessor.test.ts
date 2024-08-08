import { FileProcessor } from '../fileProcessor';

describe('FileProcessor', () => {
  const content = 'hello world hello hello hello';
  let processor: FileProcessor;

  beforeEach(() => {
    processor = new FileProcessor(content);
  });

  test('should count total words', () => {
    expect(processor.getTotalWords()).toBe(5);
  });

  test('should count total letters', () => {
    expect(processor.getTotalLetters()).toBe(20);
  });

  test('should count total spaces', () => {
    expect(processor.getTotalSpaces()).toBe(4);
  });

  test('should find frequent words', () => {
    expect(processor.getFrequentWords(2)).toEqual({ 'hello': 4 });
  });
});
