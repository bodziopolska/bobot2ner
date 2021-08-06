const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "bobot",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Copyright')
        .addField('`Kto stwożył bobota`', 'Bobot został stwożony przez Bodzio Polska')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Strona bobota')
        .addField('`Strona`', 'Bobot.ml')
        .setTimestamp()

        const pages = [
                moderation,
                fun
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}