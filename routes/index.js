const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    // Make an API request using Axios
    const response = await axios.get(
      "https://aljamia-hgtgv.ondigitalocean.app/api/v1/ventures"
    );

    // Get the data from the API response
    const venturesData = response.data;
    console.log("response api", venturesData);

    // Get the title of the first array element
    const title = venturesData.response[0].title;

    // Pass the title to the EJS template and render it
    res.render("index", { title });
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    res.render("error"); // Render an error template in case of API failure
  }
});

module.exports = router;
