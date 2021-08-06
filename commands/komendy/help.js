const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderacja')
        .addField('`!kick`', 'Wyrrzuca ludzi')
        .addField('`!ban`', 'Banuje')
        .addField('`!clear`', 'Usuwa wiadomości')
        .addField('`!mute`', 'Wycisza Ludzi')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Zabawy')
        .addField('`!meme`', 'Losuje mema')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('`!covid`', 'Pokazuje statystyki covid-19')
        .addField('`!ping`', 'Pokazuje twój ping')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}