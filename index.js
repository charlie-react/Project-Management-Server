const express = require("express");
const colors = require("colors")
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema");
const connectDB = require('./connect/connect')
const port = process.env.PORT || 5000;


const app = express();
app.use(cors())

// Connectin to Database

connectDB()
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
    formatError: (error) => {
      console.error(error); // Log the error to the console
      return error; // Return the error as it is
    },
  })
);


app.listen(port, () => {
  console.log(`listenin on port ${port}...`);
});
