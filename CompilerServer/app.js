// // app.js

// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const mongoUrl = 'mongodb+srv://chandirasegaran:25032002@myangadi.bxernfz.mongodb.net/?retryWrites=true&w=majority&appName=MyAngadi';
// const dbName = 'Language';
// const collectionName = 'MyLanguage';

// MongoClient.connect(mongoUrl, (err, client) => {
//   if (err) throw err;
//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);

//   app.get('/language', (req, res) => {
//     collection.find({}).toArray((err, data) => {
//       if (err) throw err;
//       res.json(data);
//     });
//   });

//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
// });

const express = require('express');
const app = express();
const cors = require('cors'); // Add this line

const PORT = 3000;

// Array of language objects
const languages = [
  { name: "javascript", version: "18.15.0" },
  { name: "typescript", version: "5.0.3" },
  { name: "c", version: "10.2.0" },
  { name: "cpp", version: "10.2.0" },
  { name: "python", version: "3.10.0" },
  { name: "java", version: "15.0.2" },
  { name: "csharp", version: "6.12.0" },
  { name: "php", version: "8.2.3" },
  { name: "ruby", version: "3.0.1" },
  { name: "go", version: "1.16.2" },
  { name: "rust", version: "1.68.2" },
  { name: "swift", version: "5.3.3" },
  { name: "dart", version: "2.19.6" },
  { name: "kotlin", version: "1.8.20" },
  { name: "python2", version: "2.7.18" },
  { name: "elixir", version: "1.11.3" },
  { name: "groovy", version: "3.0.7" },
  { name: "pascal", version: "3.2.2" }
];
// Use the cors middleware
app.use(cors());

// Iterate over each language and create an endpoint
languages.forEach(language => {
  app.get(`/${language.name}`, (req, res) => {
    res.json({ name: language.name, version: language.version });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
