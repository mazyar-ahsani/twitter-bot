// const { TwitterApi } = require('twitter-api-v2');
// require('dotenv').config();

// // کلیدها و توکن‌ها رو از محیط بخون
// const client = new TwitterApi({
//   appKey: process.env.APP_KEY,
//   appSecret: process.env.APP_SECRET,
//   accessToken: process.env.ACCESS_TOKEN,
//   accessSecret: process.env.ACCESS_SECRET,
// });

// (async () => {
//   try {
//     await client.v2.tweet('سلام دنیا! این یه توییت اتوماتیکه 😎');
//     console.log('توییت با موفقیت ارسال شد.');
//   } catch (error) {
//     console.error('خطا در ارسال توییت:', error);
//   }
// })();



const express = require('express');
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const app = express();

const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

// تعریف مسیر وب برای اجرای توییت
app.get('/tweet', async (req, res) => {
  try {
    await client.v2.tweet('سلام دنیا! این یه توییت اتوماتیکه از Glitch 😎');
    res.send('✅ توییت با موفقیت ارسال شد.');
  } catch (error) {
    console.error('❌ خطا در ارسال توییت:', error);
    res.status(500).send('❌ خطا در ارسال توییت.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 بات در حال اجرا روی پورت ${PORT}`);
});
