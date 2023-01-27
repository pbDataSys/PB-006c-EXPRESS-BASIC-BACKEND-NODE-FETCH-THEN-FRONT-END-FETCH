const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

//!-------------------------------------------------
//* "/names" creates the endpoint of http://localhost:5000/names - that we can now fetch from the frontend.
app.get("/names", function (req, res) {
  const userURL = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    try {
      const response = await fetch(userURL);
      const dataFeed = await response.json();

      res.json(dataFeed); //!<<<<<<<<<<<<<<<<<<
      return await dataFeed;
    } catch (error) {
      console.log("DATAFEED-ERROR!", error);
    }
  };
  getUsers();
});
//!-------------------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
