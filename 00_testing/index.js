/* index.js */

/*
    READING THE TOKEN AND START THE BOT

    export BOT_TOKEN=`cat token` && npm run start
*/

const { Telegraf } = require('telegraf');

function testBot() {
    const bot = new Telegraf(process.env.BOT_TOKEN);
    console.log(bot);
}

testBot();