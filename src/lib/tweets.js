const Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_TOKEN,
    token_secret: process.env.TWITTER_TOKEN_SECRET
  })

const watchTwitter = client => {
  t.on('tweet', function (tweet) {
    console.log('tweet received', tweet)
  })

  t.on('error', function (err) {
    console.log(err)
  });

  // TODO change to #8bitstoinfinity
  t.track('#gamedev')
}

module.exports = { watchTwitter };
