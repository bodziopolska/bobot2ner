const discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'N/A',
   async execute(client, message, args){

    let pollChannel = message.mentions.channels.first() // tell the bot what the channel is
    if(!pollChannel) return message.channel.send('Wybierz kanał na którym ma być ankieta'); // warning

    let polldescription = args.slice(1).join(' '); // the poll 
    if (!polldescription) return message.channel.send('Podaj tekst ankiety') // warning

    let embedPoll = new discord.MessageEmbed() // setting the embed
    .setTitle(' 🤖Nowa ankieta!🤖 ', message.author.displayAvatarURL()) // title to the embed
    .setDescription(polldescription) // poll
    .setColor('PURPLE') // color
    .setFooter(`Poll started by: ${message.author.tag}`) // who started the poll
    let msgEmbed = await pollChannel.send(embedPoll); // send
    await msgEmbed.react('👍') // react with thumbs up
    await msgEmbed.react('👎') // react with theumbs down
    }
}
   