module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "... - Long LTD",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
var mention = Object.keys(event.mentions)[0];

let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n ◉❖Fɛ͜͡ɛɭı̄ı̄͜ƞ͡gɭɛ͜͡s͢s̈̽≛A̤̽ɣ̽ʋ͜͡s͢h X ⃝d❖◉\ (─━━◉❖Fɛ͜͡ɛɭı̄ı̄͜ƞ͡gɭɛ͜͡s͢s̈̽≛A̤̽ɣ̽ʋ͜͡s͢h X ⃝d❖◉━━─)(•◡•)\n\n𝐀𝐠𝐞 : 22\n\n𝐅𝐫𝐨𝐦 : CHAPRA(BIHAR✌✊)\n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :-👇👇https://www.facebook.com/profile.php?id=61576621931257==");


}
