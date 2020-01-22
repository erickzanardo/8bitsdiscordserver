module.exports = {
  handleMessage: (message) => {
    if (message.content.toLowerCase() === "lemnis do you copy?") {
      message.reply("Loud and clear!");
    }
  }
}
