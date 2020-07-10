const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

mongoose.connect(
	"mongodb+srv://dymaida:rWOiyMVxGjxfK0Dq@cluster0.obchv.gcp.mongodb.net/angulardyma?retryWrites=true&w=majority",
	{
		keepAlive: true,
		reconnectTries: Number.MAX_VALUE,
		useMongoClient: true,
		// useNewUrlParser: true,
		// useUnifiedTopology: true;
	},
	function (error) {
		if (error) {
			console.log(error);
		} else {
			console.log("Connexion opened to mongodb!");
		}
	}
);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
