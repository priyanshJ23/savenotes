const express = require("express");

require("dotenv").config();
const connectDB = require("./confiq/db.js");
const userRoute = require("./routes/userRoutes");
const notesRoutes = require("./routes/noteRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
connectDB();

const app = express(); // main thing
app.use(express.static("./public"));
app.use(express.json()); // to accept json data

app.use("/api/users", userRoute);
app.use("/api/notes", notesRoutes);
app.get("/", (req, res) => {
  res.send("API is running..");
});
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
const on = process.env.NODE_ENV;
app.listen(PORT, console.log("Server running in" + on + "mode on port" + PORT));
