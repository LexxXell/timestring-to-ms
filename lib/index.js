"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStringToMs = void 0;
/**
 * Convert a string representing time in the format '1h1m1s' to milliseconds.
 * @param time - String representing time in the format '1h1m1s'.
 * @returns Time converted to milliseconds.
 */
function timeStringToMs(time) {
    time = time.replace(/\s+/g, '');
    const patternregExp = /^((\d+)h)?((\d+)m)?((\d+)s)?$/;
    const matches = time.match(patternregExp);
    if (!matches) {
        throw new Error('Unknown time format: ' + time);
    }
    const [, , hours, , minutes, , seconds] = matches;
    const parsedHours = parseInt(hours) || 0;
    const parsedMinutes = parseInt(minutes) || 0;
    const parsedSeconds = parseInt(seconds) || 0;
    return (parsedHours * 3600 + parsedMinutes * 60 + parsedSeconds) * 1000;
}
exports.timeStringToMs = timeStringToMs;
if (require.main === module) {
    console.log(timeStringToMs('10m 3 s'));
}
