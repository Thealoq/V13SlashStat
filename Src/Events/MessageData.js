const config = global.config
const client = global.client
const MessageData = require("../schema/MessageData")
const MessageChannel = require("../schema/MessageChannel")
class Events {
    constructor() {
        this.name = "messageCreate"
    }
    async execute(message) {
        let Veri = await MessageData.findOne({ GuildId: message.guild.id, MemberId: message.member.id })
        let Channel = await MessageChannel.findOne({ GuildId: message.guild.id, Channel: message.channel.id, MemberId: message.member.id })
        if (!Veri) {
            Veri = new MessageData({
                GuildId: message.guild.id,
                MemberId: message.member.id,
                Point: 1,
            })
            Veri.save()
        } else {
            Veri.Point += 1
            Veri.save()
        }
        if (!Channel) {
            Channel = new MessageChannel({
                GuildId: message.guild.id,
                MemberId : message.member.id,
                Channel: message.channel.id,
                Point: 1
            })
            Channel.save()
        } else {
            Channel.Point += 1
            Channel.save()
        }
    }
}
module.exports = Events