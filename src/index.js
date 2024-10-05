const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes/index.routes");
// http logger
app.use(morgan("combined"));

// template engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
// set view engine
app.set("view engine", "hbs");

// set views
app.set("views", path.join(__dirname, "resources/views"));
console.log(path.join(__dirname, "resources/views"));

// routes init
route(app);

// listen port
app.listen(port, () => {
    console.log(`Server dang chay port: ${port}`);
});
