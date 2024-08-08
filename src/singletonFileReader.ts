import axios from 'axios';
import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

class SingletonFileReader {
  private static instance: SingletonFileReader;

  private constructor() {}

  public static getInstance(): SingletonFileReader {
    if (!SingletonFileReader.instance) {
      SingletonFileReader.instance = new SingletonFileReader();
    }
    return SingletonFileReader.instance;
  }

  public async readFile(path: string): Promise<string> {
    if (path.startsWith('http')) {
      const response = await axios.get(path);
      return response.data;
    } else {
      return readFile(path, 'utf-8');
    }
  }
}

export { SingletonFileReader };
