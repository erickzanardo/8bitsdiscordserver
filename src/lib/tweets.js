const { getChannelByName } = require("../utils")

const Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_TOKEN,
    token_secret: process.env.TWITTER_TOKEN_SECRET
  })

const watchTwitter = client => {
  t.on('tweet', function (tweet) {
    const channel = getChannelByName("tweets", client);
    const link = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
    channel.send(link);
  })

  t.on('error', function (err) {
    console.log(err)
  });

  t.track('#8bitstoinfinity')
}

module.exports = { watchTwitter };
