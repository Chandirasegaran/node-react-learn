const mydb = require('./db/user.js');

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://chandirasegaransegar:<password>@cluster0.07sgdkz.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://chandirasegaransegar:MMII11nZVH9ZsDHc@cluster0.07sgdkz.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let collections = null;
// async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("segardb").command({ ping: 1 });
    const clidb = client.db("segardb");
    collections=clidb.collection('usercollection');

    // Create a new document using the model
      const newDocument = new mydb({
        name:'meghaa',
        lastname:'pu',
        phone:9080302879,
        createdAt:new Date(2024-2-27),
        status:true
      });

      // Convert Mongoose document to a plain JavaScript object
      const documentObject = newDocument.toObject();

      // Insert the document using insertOne
      collections.insertOne(documentObject);


    // collections.insertOne({
    //     name:'meghaa',
    //     lastname:'pu',
    //     phone:9080302879,
    //     createdAt:new Date(2024-2-27),
    //     status:true
    // })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


  } 
  catch{

  }
//   finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
//   }
// }
// run().catch(console.dir);
