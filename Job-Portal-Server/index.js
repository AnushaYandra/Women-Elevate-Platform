const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.use(cors({
    origin: "https://women-elevate-platform.vercel.app", 
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true
}));

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db = client.db("mernJobPortal");
    const jobsCollections = db.collection("demoJobs");

    //post a job
    app.post('/post-job', async(req, res) => {
        const body = req.body;
        body.createAt = new Date();
        const result = await jobsCollections.insertOne(body);
        if(result.insertedId){
            return res.status(200).send(result);
        }else{
            return res.status(404).send({message: "Cannot insert", status: false})
        }
    })


    //get all jobs 
    app.get("/all-jobs", async(req, res) => {
        const jobs = await jobsCollections.find({}).toArray();
        res.send(jobs);
    })

    app.get("/", async(req, res) => {
      res.json("Hello");
    })

    //get jobs by email
    app.get("/my-jobs/:email", async(req,res) => {
      //console.log(req.params.email)
      const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
      res.send(jobs);
    })


    //delete a job
    app.delete("/job/:id", async(req, res)=> {
       const id = req.params.id;
       const filter = {_id: new ObjectId(id)}
       const result = await jobsCollections.deleteOne(filter);
       res.send(result);
    })


    //get a single job using id
    app.get("/all-jobs/:id", async(req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({_id : new ObjectId(id)})
      res.send(job);
    })


    // update a job
    app.patch("/update-job/:id", async(req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert : true};
      const updateOne = {
        $set : {
          ...jobData
        },
      };
      const result = await jobsCollections.updateOne(filter, updateOne, options);
      res.send(result);
    })
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


//mongodb+srv://anuyandra445:2owNhUy09CmQSBjf@job-portal-project.sbx7uf5.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-project
