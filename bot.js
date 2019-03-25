var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const csv = require('csv-parser');
const fs = require ('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('csv file successfully processed');
    })

const csvWriter = createCsvWriter({
    path: 'data.csv',
    header: [
        {id: 'msg', title: 'Message'},
    ]
})
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (user == 'HelloCookieJar') {
        csvWriter
            .writerRecords(data)
            .then(()=> console.log('writtern succesfully'));
     }
});
