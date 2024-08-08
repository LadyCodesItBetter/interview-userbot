import { SingletonFileReader } from '../singletonFileReader';
import fs, { PathOrFileDescriptor } from 'fs';
import axios from 'axios';

jest.mock('fs');
jest.mock('axios');

const mockedFs = fs as jest.Mocked<typeof fs>;
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SingletonFileReader', () => {
  let reader: SingletonFileReader;

  beforeEach(() => {
    reader = SingletonFileReader.getInstance();
  });

  test('should read local file', async () => {
    const fakeContent = 'local file content';
    mockedFs.readFile.mockImplementation((path: PathOrFileDescriptor, encodingOrCallback: any, callback?: (err: NodeJS.ErrnoException | null, data: Buffer | string) => void) => {
      if (typeof encodingOrCallback === 'function') {
        // This is the case where no encoding is provided, and the callback is the second argument.
        callback = encodingOrCallback;
      }
      callback!(null, Buffer.from(fakeContent));
    });

    const content = await reader.readFile('localPath');
    expect(content).toBe(fakeContent);
  });

  test('should read file from URL', async () => {
    const fakeContent = 'web file content';
    mockedAxios.get.mockResolvedValue({ data: fakeContent });

    const content = await reader.readFile('http://example.com');
    expect(content).toBe(fakeContent);
  });
});
