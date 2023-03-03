// Import the fastify framework
const fastify = require("fastify");
const cors = require("@fastify/cors");
// Import "mongoose"
const mongoose = require("mongoose");
// Import our "User" model
const User = require("../models/user");
const Path = require("../models/elementPath");
const app = fastify();

app.register(cors, {});

const mongoUrl =
  process.env.MONGODB_URI ||
  "mongodb://root:password@127.0.0.1:27017/analytics?authSource=admin";

// connect to MongoDB datastore
try {
  mongoose.connect(mongoUrl);
} catch (error) {
  console.error(error);
}

//Set the GET route "/api/users" (récupère tous les users)
app.get("/api/users", async (request, reply) => {
  const result = await User.find();
  reply.send(result);
});

//Set the GET route "/api/users/:userID" (récupère un user par son id)
app.get("/api/users/:userId", async (request, reply) => {
  var userId = request.params.userId;
  const result = await User.findById(userId);
  reply.send(result);
});

//Set the POST route "/api/users" (créé un user dans la bdd)
app.post("/api/users", async (request, reply) => {
  let user = request.body;
  const result = await User.create(user);
  reply.send(user);
});

//Set the POST route "/api/paths" (envoi un path en bdd)
app.post("/api/paths", async (request, reply) => {
  let path = request.body;
  const result = await Path.create(path);
  reply.send(path);
});

// Start the server
app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
