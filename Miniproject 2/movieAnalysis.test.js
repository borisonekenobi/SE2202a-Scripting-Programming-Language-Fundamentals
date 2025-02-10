const movieProcess = require('./movieAnalysis.js')
const movies = require('./movie2.json')

test('Works',() => {expect(movieProcess('Western',2,movies)).toBe('Dances with Wolves released in 1990 is the highest rated Western movie over 2 hour(s) long, with an imdb rating of 8.1')});
