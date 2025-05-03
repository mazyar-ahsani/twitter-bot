const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

// کلیدها و توکن‌ها رو از محیط بخون
const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

(async () => {
  try {
    await client.v2.tweet('سلام دنیا! این یه توییت اتوماتیکه 😎');
    console.log('توییت با موفقیت ارسال شد.');
  } catch (error) {
    console.error('خطا در ارسال توییت:', error);
  }
})();



