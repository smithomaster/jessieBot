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

const options = {
    maxTries: 20,
}

const markovCrystal = require('markov-chain-nlg');
const markovJessie = require('markov-chain-nlg');
const markovSophia = require('markov-chain-nlg');
const markovGabby = require('markov-chain-nlg');
const markovLuin = require('markov-chain-nlg');
const markovZhui = require('markov-chain-nlg');
const markovTal = require('markov-chain-nlg');
const markovAll = require('markov-chain-nlg');

var crystalMessages = [' '];
var jessieMessages = [' '];
var sophiaMessages = [' '];
var gabbyMessages = [' '];
var luinMessages = [' '];
var zhuiMessages = [' '];
var talMessages = [' '];
var allMessages = [' '];

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username);
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0,1) != '%') {
        allMessages.push(message);
    }
    if (user == 'Crystal' && message != '%crystal') {
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

    if (message.substring(0, 14) == '%markovCrystal') {
        const markovCrystal = require('markov-chain-nlg');
        markovCrystal.train(crystalMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovCrystal.generate (7)
        });
    }

    if (message.substring(0, 12) == '%crystalSpew') {
        bot.sendMessage({
            to: channelID,
            message: crystalMessages
        });
    }

    if (user == 'dondet' && message != '%tal') {
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

    if (message.substring(0, 10) == '%markovTal') {
        const markovTal = require('markov-chain-nlg');
        markovTal.train(talMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovTal.generate (7)
        });
    }

    if (message.substring(0, 8) == '%talSpew') {
        bot.sendMessage({
            to: channelID,
            message: talMessages
        });
    }

    if (user == 'zhui' && message != '%zhui') {
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

    if (message.substring(0, 11) == '%markovZhui') {
        const markovZhui = require('markov-chain-nlg');
        markovZhui.train(zhuiMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovZhui.generate (7)
        });
    }

    if (message.substring(0, 9) == '%zhuiSpew') {
        bot.sendMessage({
            to: channelID,
            message: zhuiMessages
        });
    }

    if (user == 'HelloCookieJar' && message.substring(0, 1) != '%jessie') {
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

    if (message.substring(0, 13) == '%markovJessie') {
        const markovJessie = require('markov-chain-nlg');
        markovJessie.train(jessieMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovJessie.generate (7)
        });
    }

    if (message.substring(0, 11) == '%jessieSpew') {
        bot.sendMessage({
            to: channelID,
            message: jessieMessages
        });
    }

    if (user == '𝙨𝙤𝙥𝙝𝙞𝙖' && message != '%sophia') {
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

    if (message.substring(0, 13) == '%markovSophia') {
        const markovSophia = require('markov-chain-nlg');
        markovSophia.train(sophiaMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovSophia.generate (7)
        });
    }

    if (message.substring(0, 11) == '%sophiaSpew') {
        bot.sendMessage({
            to: channelID,
            message: sophiaMessages
        });
    }

    if (user == 'owobble' && message != '%gabby') {
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

    if (message.substring(0, 12) == '%markovGabby') {
        const markovGabby = require('markov-chain-nlg');
        markovGabby.train(gabbyMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovGabby.generate (7)
        });
    }

    if (message.substring(0, 10) == '%gabbySpew') {
        bot.sendMessage({
            to: channelID,
            message: gabbyMessages
        });
    }

    if (user == 'LuiTheFly' && message != '%luin') {
        console.log(message);
        luinMessages.push(message);
    }

    if (message.substring(0, 5) == '%luin') {
        var min=1;
        var max=luinMessages.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        bot.sendMessage({
            to: channelID,
            message: luinMessages[random]
        });
    }

    if (message.substring(0, 11) == '%markovLuin') {
        const markovLuin = require('markov-chain-nlg');
        markovLuin.train(luinMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovLuin.generate (7)
        });
    }

    if (message.substring(0, 9) == '%luinSpew') {
        bot.sendMessage({
            to: channelID,
            message: luinMessages
        });
    }

    if (message.substring(0, 13) == '%markovServer') {
        const markovAll = require('markov-chain-nlg');
        markovAll.train(allMessages, true);

        bot.sendMessage({
            to: channelID,
            message: markovAll.generate (7)
        });
    }

    if (message.substring(0, 22) == '%superSecretStopServer') {
        process.exit();
    }
});
