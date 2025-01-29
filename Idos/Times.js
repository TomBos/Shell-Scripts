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

        $('div[id^="connectionBox-"]').each((_, element) => {
            const totalTime = $(element).find('.connection-head p').text().trim();
            const title = $(element).find('h3').attr('title');

            const startingPlace = $(element).find('ul li.item').first().find('p.station strong').text().trim();
            const startingTime = $(element).find('ul li.item').first().find('p.time').text().trim();

            const endingPlace = $(element).find('ul li.item').last().find('p.station strong').text().trim();
            const endingTime = $(element).find('ul li.item').last().find('p.time').text().trim();

            console.log(`
Informace o Dopravě:
-------------------------------------------
Linka:       | ${title} |
Vyjede z:    | ${startingPlace} v ${startingTime} |
A dojede do: | ${endingPlace} v ${endingTime} |
Celkový čas: | ${totalTime} |
-------------------------------------------`);

        });
    });
});
