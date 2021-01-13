/* index.js */

/*
    READING THE TOKEN AND START THE BOT

    export BOT_TOKEN=`cat token` && npm run start
*/

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.start(ctx => {
    ctx.reply('This is a simple echo bot');
});

bot.on('text', ctx => {
    // console.log(ctx.from);
    if (ctx.from.username === 'fabioztessitore') {
        ctx.reply('IMPORTANT: ' + ctx.message.text);
    } else {
        ctx.reply('UNVERIFIED CLAIM: ' + ctx.message.text);
    }
});

bot.launch();