import { MongoClient, ServerApiVersion } from "mongodb";
//Following is your connection URI
//Make sure to replace with your connection string.
const ATLAS_URI="mongodb+srv://fsddemo_db_user:cY5HRXnMWDL7GtBj@cluster0.3pwyhbs.mongodb.net/?appName=Cluster0"

const uri = ATLAS_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("students");

export default db;

//to run node index.js