const fs = require('fs');
const csv = require('csv-parser');



const filesToDelete = ['canada.txt', 'usa.txt'];
filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted existing ${file}`);
  }
});

// Write Stream for Canada and USA
const canadaWriteStream = fs.createWriteStream('canada.txt');
const usaWriteStream = fs.createWriteStream('usa.txt');

canadaWriteStream.write('country,year,population\n');
usaWriteStream.write('country,year,population\n');



fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (row.country === 'Canada') {
      canadaWriteStream.write(`${row.country},${row.year},${row.population}\n`);
    } else if (row.country === 'United States') {
      usaWriteStream.write(`${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file processing completed');
    canadaWriteStream.end();
    usaWriteStream.end();
  })
  .on('error', (error) => {
    console.error('Error processing CSV file:', error);
  });
