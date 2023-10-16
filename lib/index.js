"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStringToMs = void 0;
/**
 * Convert a string representing time in the format '1h1m1s' to milliseconds.
 * If the input string consists only of digits, it is considered as milliseconds.
 * @param time - String representing time in the format '1h1m1s' or milliseconds.
 * @returns Time converted to milliseconds.
 */
function timeStringToMs(time) {
    time = time.replace(/\s+/g, ''); // Remove all white spaces from the string
    // If the string consists only of digits, return it as milliseconds
    if (/^\d+$/.test(time)) {
        return parseInt(time);
    }
    const patternregExp = /^((\d+)h)?((\d+)m)?((\d+)s)?$/;
    const matches = time.match(patternregExp);
    // If the string doesn't match the expected format, throw an error
    if (!matches) {
        throw new Error('Unknown time format: ' + time);
    }
    const [, , hours, , minutes, , seconds] = matches;
    const parsedHours = parseInt(hours) || 0; // Parse hours, defaulting to 0 if not present
    const parsedMinutes = parseInt(minutes) || 0; // Parse minutes, defaulting to 0 if not present
    const parsedSeconds = parseInt(seconds) || 0; // Parse seconds, defaulting to 0 if not present
    // Convert to milliseconds: 1 hour = 3600 seconds, 1 minute = 60 seconds
    return (parsedHours * 3600 + parsedMinutes * 60 + parsedSeconds) * 1000;
}
exports.timeStringToMs = timeStringToMs;
if (require.main === module) {
    console.log(timeStringToMs('10m 3 s')); // Example usage of the function
    console.log(timeStringToMs('10m 3m')); // Example usage of the function
    console.log(timeStringToMs('1000')); // Example usage of the function
}
