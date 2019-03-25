var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

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

var crystalMessages = [];
var jessieMessages = [];
var sophiaMessages = [];
var gabbyMessages = [];

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (user == 'Crystal' && message != '%crystal') {
        console.log('crystal: ');
        console.log(message);
        crystalMessages.push(message);

    }
     if (message.substring(0, 8) == '%crystal') {
         var min=1;
         var max=crystalMessages.length;
         var random = Math.floor(Math.random() * (+max - +min)) + +min;
           bot.sendMessage({
               to: channelID,
               message: crystalMessages[random]
           });
    }
    if (user == 'HelloCookieJar' && message.substring(0, 1) != '%jessie') {
        console.log('jessie: ');
        console.log(message);
        jessieMessages.push(message);

    }
     if (message.substring(0, 7) == '%jessie') {
         var min=1;
         var max=jessieMessages.length;
         var random = Math.floor(Math.random() * (+max - +min)) + +min;
           bot.sendMessage({
               to: channelID,
               message: jessieMessages[random]
           });
    }
    if (user == '𝙨𝙤𝙥𝙝𝙞𝙖' && message != '%sophia') {
        console.log('sophia: ');
        console.log(message);
        sophiaMessages.push(message);

    }
     if (message.substring(0, 8) == '%sophia') {
         var min=1;
         var max=sophiaMessages.length;
         var random = Math.floor(Math.random() * (+max - +min)) + +min;
           bot.sendMessage({
               to: channelID,
               message: sophiaMessages[random]
           });
    }
    if (user == 'owobble' && message != '%gabby') {
        console.log('gabby: ');
        console.log(message);
        gabbyMessages.push(message);

    }
     if (message.substring(0, 8) == '%gabby') {
         var min=1;
         var max=gabbyMessages.length;
         var random = Math.floor(Math.random() * (+max - +min)) + +min;
           bot.sendMessage({
               to: channelID,
               message: gabbyMessages[random]
           });
    }
});
