var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
var MarkovChain = require('markov-chain-nlg');
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
var crystalMessages = [' '];
var jessieMessages = [' '];
var sophiaMessages = [' '];
var gabbyMessages = [' '];
var luinMessages = [' '];
var zhuiMessages = [' '];
var talMessages = [' '];

bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
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

    if (user == 'dondet' && message != '%tal') {
        console.log('tal: ');
        console.log(message);
        talMessages.push(message);
    }

    if (message.substring(0, 8) == '%tal') {
        var min=1;
        var max=talMessages.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        bot.sendMessage({
            to: channelID,
            message: talMessages[random]
        });
    }

    if (user == 'zhui' && message != '%zhui') {
        console.log('zhui: ');
        console.log(message);
        zhuiMessages.push(message);
    }

    if (message.substring(0, 5) == '%zhui') {
        var min=1;
        var max=zhuiMessages.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        bot.sendMessage({
            to: channelID,
            message: zhuiMessages[random]
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

    if (user == 'LuiTheFly' && message != '%luin') {
        console.log('luin: ');
        console.log(message);
        luinMessages.push(message);
    }

    if (message.substring(0, 8) == '%luin') {
        var min=1;
        var max=luinMessages.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        bot.sendMessage({
            to: channelID,
            message: luinMessages[random]
        });
    }

    if (message.substring(0, 14) == '%markovCrystal') {
        MarkovChain.train(crystalMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 11) == '%markovLuin') {
        MarkovChain.train(luinMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 14) == '%markovGabby') {
        MarkovChain.train(gabbyMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 14) == '%markovZhui') {
        MarkovChain.train(zhuiMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 14) == '%markovJessie') {
        MarkovChain.train(jessieMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 14) == '%markovSophia') {
        MarkovChain.train(sophiaMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }

    if (message.substring(0, 14) == '%markovTal') {
        MarkovChain.train(talMessages, true);

        bot.sendMessage({
            to: channelID,
            message: MarkovChain.generate(6)
        });
    }
});
