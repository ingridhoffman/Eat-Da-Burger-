// Node dependencies
const express = require("express");

// Set express app and port
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes for server
const routes = require("./controllers/burgers_controller");
app.use(routes);

// Start server
app.listen(PORT, () => {
	console.log("Server listening on: http://localhost:" + PORT);
});
