module.exports.config = {
 name: "Prem.babu",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "कोई एसे पिछवाड़े मैं लात मारता है?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐒𝐨𝐫𝐫𝐲 ✦Fɛ͜͡ɛɭı̄ı̄͜ƞ͡gɭɛ͜͡s͢s̈̽ A̤̽ɣ̽ʋ͜͡s͢h X ⃝d  ✦ 🙏 ${name} को दोबारा 𝐀𝐝𝐝 नही कर पाया 𝐆𝐫𝐨𝐮𝐩 में 🥺 लगता है इसने मुझे 𝐁𝐥𝐨𝐜𝐤 कर दिया 😕`, event.threadID)
   } else api.sendMessage(`भाग के जाने का नही ${name} बेबी ,🥀✦Fɛ͜͡ɛɭı̄ı̄͜ƞ͡gɭɛ͜͡s͢s̈̽ A̤̽ɣ̽ʋ͜͡s͢h X ⃝d  ✦🌴 के 𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 के बिना कहीं नहीं जा सकते 😄 देखो फिर से 𝐀𝐝𝐝 कर दिया आपको 😌`, event.threadID);
  })
 }
}
