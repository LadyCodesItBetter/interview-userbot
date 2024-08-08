export class FileProcessor {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getTotalWords(): number {
    return this.content.split(/\s+/).length;
  }

  public getTotalLetters(): number {
    return this.content.replace(/\s+/g, '').length;
  }

  public getTotalSpaces(): number {
    return (this.content.match(/\s/g) || []).length;
  }

  public getFrequentWords(minFrequency: number): Record<string, number> {
    const words = this.content.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    const wordMap: Record<string, number> = {};

    words.forEach(word => {
      if (wordMap[word]) {
        wordMap[word]++;
      } else {
        wordMap[word] = 1;
      }
    });

    return Object.fromEntries(Object.entries(wordMap).filter(([_, count]) => count > minFrequency));
  }
}
