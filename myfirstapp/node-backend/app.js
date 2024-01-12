const express = require('express');
const mongoose = require('mongoose');
const mydb = require('./db/user.js');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = process.env.PORT || 3000;

// mongoose.connect(uri);
const uri = "mongodb+srv://chandirasegaransegar:MMII11nZVH9ZsDHc@cluster0.07sgdkz.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://myAtlasDBUser:Lit7Y22a6PuTLCNS@myatlasclusteredu.lekqkdz.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri);

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
client.connect(function(err, db) {
    if (err) throw err;
  
    console.log('Connected to MongoDB Atlas successfully!');
  
    // Do something with the database
});
app.post("/saveUser",(req,res,next)=>{
    const mydbconn = new mydb(
        {
            name:'meghaa',
            lastname:'pu',
            phone:9080302879,
            createdAt:new Date(2024-2-27),
            status:true
        })
        mydbconn.save()
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
})

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});




// const express = require('express');
// const mongoose = require('mongoose');
// const mydb = require('./db/user.js');
// const app = express();
// const PORT = process.env.PORT || 3000;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://myAtlasDBUser:xYMhFRIPB3LczSTZ@myatlasclusteredu.lekqkdz.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// // async function run() {
// //   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     //  client.connect().then((
//     //     res)=>{console.log(res)
//     //     }
        
//     //  )
//     //  .catch((err)=>{console.log(err)})
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
// //   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
// //   }
// // }

// // run().catch(console.dir);

// mongoose.connect("mongodb+srv://myAtlasDBUser:xYMhFRIPB3LczSTZ@myatlasclusteredu.lekqkdz.mongodb.net/?retryWrites=true&w=majority");

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });