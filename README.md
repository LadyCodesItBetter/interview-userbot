# Word Processor Application

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Build the application:
    ```sh
    npm run build
    ```

3. Run the application:
    ```sh
    node dist/index.js <file-path-or-url>
    ```

4. Build the application:
    ```sh
    npm run build
    ```

## Running Tests

```sh
npm test
```

## Docker

1. Build the Docker image:
    ```sh
    docker build -t word-processor .
    ```
2. Run the Docker container:
    ```sh
    docker run -it word-processor <file-path-or-url>
    ```

## Example Usage
 ```sh
node dist/index.js ./test.txt
node dist/index.js http://example.com/test.txt
```

This application reads a file from a specified path or URL and calculates:

* Total number of words
* Total number of letters
* Total number of spaces
* Words that repeat more than 10 times along with their count.
