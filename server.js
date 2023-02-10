const express = require("express");

const homeRoutes = require("../module_11/routes/homeroutes");
const apiRoutes = require("../module_11/routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// Built in express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Custome middleware including routes
app.use("/api", apiRoutes);
app.use("/", homeRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
