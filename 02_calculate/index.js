/* index.js */

/*
    READING THE TOKEN AND START THE BOT

    export BOT_TOKEN=`cat token` && npm run start
*/

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

function readFloat(text) {
    return parseFloat( text.split(' ')[1] );
}

function twoDigits(n) {
    return parseInt(n*100) / 100;
}

bot.start(ctx => {
    ctx.reply('Calculate double, square, and cube of a number and volume of a sphere');
});

bot.command('double', ctx => {
    const n = readFloat(ctx.message.text);
    if (n) {
        ctx.reply( twoDigits(2*n) );
    } else {
        ctx.reply('Usage: /double n, where n is a number');
    }
});

bot.command('square', ctx => {
    const n = readFloat(ctx.message.text);
    if (n) {
        ctx.reply( twoDigits(n*n) );
    } else {
        ctx.reply('Usage: /square n, where n is a number');
    }
});

bot.command('cube', ctx => {
    const n = readFloat(ctx.message.text);
    if (n) {
        ctx.reply( twoDigits(n*n*n) );
    } else {
        ctx.reply('Usage: /cube n, where n is a number');
    }
});

bot.command('sphere', ctx => {
    const n = readFloat(ctx.message.text);
    if (n) {
        ctx.reply( twoDigits(4./3.*Math.PI*n*n*n) );
    } else {
        ctx.reply('Usage: /sphere n, where n is a number');
    }
});

bot.launch();