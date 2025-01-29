const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter files that start with "Search-"
    const searchFiles = files.filter(file => file.startsWith('Search-'));

    if (searchFiles.length === 0) {
        console.log('No files found starting with "Search"');
        return;
    }

    const filename = searchFiles[0];
    const filePath = path.join(directory, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const $ = cheerio.load(data);
        const connectionBoxes = [];

        $('div[id^="connectionBox-"]').each((_, element) => {
            connectionBoxes.push($(element).html().trim());
        });



        if (connectionBoxes.length === 0) {
            console.log('No <div id="connectionBox-..."> elements found.');
        } else {
            console.log(connectionBoxes[0]);
        }

    });
});
