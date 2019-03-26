var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
const Markov = require('markov-strings').default

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
    filter (result) => {
        return
            return.string.split(' ').length >=4 &&
            result.string.endsWith('.')
    }
}
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
        const crystalMarkov = new Markov(crystalMessages, { stateSize: 2 })
        crystalMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: crystalMarkov.generate(options)
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
        const talMarkov = new Markov(talMessages, { stateSize: 2 })
        talMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: talMarkov.generate(options)
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
        const zhuiMarkov = new Markov(zhuiMessages, { stateSize: 2 })
        zhuiMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: zhuiMarkov.generate(options)
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
        const jessieMarkov = new Markov(jessieMessages, { stateSize: 2 })
        jessieMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: jessieMarkov.generate(options)
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
        const sophiaMarkov = new Markov(sophiaMessages, { stateSize: 2 })
        sophiaMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: sophiaMarkov.generate(options)
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
        const gabbyMarkov = new Markov(gabbyMessages, { stateSize: 2 })
        gabbyMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: gabbyMarkov.generate(options)
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

    if (message.substring(0, 8) == '%luin') {
        var min=1;
        var max=luinMessages.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        bot.sendMessage({
            to: channelID,
            message: luinMessages[random]
        });
    }

    if (message.substring(0, 11) == '%markovLuin') {
        const luinMarkov = new Markov(luinMessages, { stateSize: 2 })
        luinMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: luinMarkov.generate(options)
        });
    }

    if (message.substring(0, 9) == '%luinSpew') {
        bot.sendMessage({
            to: channelID,
            message: luinMessages
        });
    }

    if (message.substring(0, 13) == '%markovServer') {
        const serverMarkov = new Markov(allMessages, { stateSize: 2 })
        serverMarkov.buildCorpus()

        bot.sendMessage({
            to: channelID,
            message: serverMarkov.generate(options)
        });
    }
});
