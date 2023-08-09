//For Local
// const mongoose = require('mongoose');
// async function connect() {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/F8_blog_dev');

//     console.log('Connect successfully!');
//   } catch (error) {
//     console.log(error);
//   }
// }

//For Mongo Atlas
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const port = process.env.PORT;
const URI = process.env.DATABASE_URI;
console.log(URI, 'URI');

async function connect(app) {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connect to DB');
      app.listen(port, () => {
        console.log(`Server is running ... on port ${port}`);
      });
    })
    .catch(error => console.log(error));
}
// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connect to DB');
//     app.listen(port, () => {
//       console.log(`Server is running ... on port ${port}`);
//     });
//   })
//   .catch(error => console.log(error));

module.exports = { connect };
