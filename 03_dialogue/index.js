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

function readWord(text) {
    let n = 0;
    let word = words[n];
    let numWords = text.length();
    while (numWords >= 0){
        word[n] = text.split(' ');
        console.log(word[n]);
        console.log(numWords);
    }
}
bot.start(ctx => {
    ctx.reply('Simple appropriate dialogue');
});

bot.command('dialogue', ctx => {
    readWord(ctx.message.text);
});

bot.launch();