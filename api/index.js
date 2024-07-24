// Import required modules
import express from "express"; // middleware
import axios from "axios"; //API requests
import bodyParser from "body-parser"; //parse body text
import path from "path"; // Path to files

// Create an express app and set the port number.

const app = express();
const port = process.env.PORT || 3000;

// Use the public folder for static files.

app.use(express.static("public"));

// use bodyparser to be able to pass text
app.use(bodyParser.urlencoded({ extended: true }));

// Get a random quote on load
app.get("/", async(req, res) => {
    try { 
        const result = await axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        res.render("index.ejs",{result});
        console.log(JSON.stringify(result.data));
    } catch (error) {
        console.log(error.result);
        res.status(404).send("An error occurred");
      }
});

// Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

//module.exports = app;