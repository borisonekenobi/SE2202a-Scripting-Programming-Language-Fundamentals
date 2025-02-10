const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const countWords = (text, words) => {
    const counts = {};
    for (const category in words) {
        counts[category] = 0;
        for (const word of words[category]) {
            const regex = new RegExp(`${word}`, 'gi');
            const matches = text.match(regex);
            if (matches) {
                counts[category] += matches.length;
            }
        }
    }
    return counts;
};

const processFiles = async () => {
    try {
        const wordsData = await readFile('./words.json', 'utf8');
        const words = JSON.parse(wordsData);
        
        const textData = await readFile('./Optimism_and_your_health.txt', 'utf8');
        const counts = countWords(textData, words);
        
        const results = JSON.stringify(counts);
        await writeFile('./result.txt', results, 'utf8');
        
        console.log('Results written to results.txt');
    } catch (error) {
        console.error('Error:', error);
    }
};

processFiles();
