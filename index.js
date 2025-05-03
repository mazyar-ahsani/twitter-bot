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

app.get('/tweet', async (req, res) => {
  console.log(`📥 درخواست به /tweet دریافت شد | زمان: ${new Date().toISOString()}`);
  console.log(`🔍 User-Agent: ${req.headers['user-agent']}`);

  try {
    await client.v2.tweet('سلام دنیا! این یه توییت اتوماتیکه از Glitch 😎');
    console.log('✅ توییت ارسال شد.');
    res.send('✅ توییت با موفقیت ارسال شد.');
  } catch (error) {
    console.error('❌ خطا در ارسال توییت:', error);
    res.status(500).send('❌ خطا در ارسال توییت.');
  }
});

// سرور را روشن نگه دار
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 سرور بات در حال اجرا روی پورت ${PORT}`);
});
