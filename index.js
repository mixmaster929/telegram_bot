"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("6846939842:AAFTEaOiUrGfDLDWCBCW8wNm6Q2me3-4xJE"); // <-- put your bot token between the "" (https://t.me/BotFather)
// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));
bot.start();
