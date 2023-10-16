# Time Conversion Utility

A simple utility function to convert a string representing time in the format '1h1m1s' to milliseconds.

## Installation

```sh
npm install lexxxell/timestring-to-ms
```

## Usage

```javascript
const { timeStringToMs } = require('lexxxell/timestring-to-ms');

// Example usage
console.log(timeStringToMs('1h30m')); // Output: 5400000
```

## API

### `timeStringToMs(time: string): number`

Converts a string representing time in the format '1h1m1s' to milliseconds.

- `time` - A string representing time in the format '1h1m1s'.

## Examples

```javascript
const { timeStringToMs } = require('lexxxell/timestring-to-ms');

console.log(timeStringToMs('2h30m')); // Output: 9000000
console.log(timeStringToMs('45m')); // Output: 2700000
console.log(timeStringToMs('30s')); // Output: 30000
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
