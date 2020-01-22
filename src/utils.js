const getChannelByName = (channelName, client) => client.channels.find(ch => ch.name === channelName);

const getRandomNumber = maxValue => Math.floor(Math.random() * maxValue);

const shouldInterceptMessage = (prefix, channel, message) => {
  if (message.content.startsWith(prefix)) {
    return (message.channel.name === "bot-debug" || message.channel.name === channel);
  }

  return false;
}

module.exports = { getChannelByName, getRandomNumber, shouldInterceptMessage }
