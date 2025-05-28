const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const adminrouterP = require("./routes/president");
const adminrouterVP = require("./routes/vpresident");
const adminrouterMS = require("./routes/msecetary");
const adminrouterS = require("./routes/secretary");
const adminrouterSociety = require("./routes/society");
const adminrouterVoteSci = require("./routes/voteSci");
const adminrouterVoteArt = require("./routes/voteArt");
const adminrouterVoteMusic = require("./routes/voteMusic");
const adminrouterVoteDebate = require("./routes/voteDebate");
const adminrouterVoteSport = require("./routes/voteSport");

const errorHandler = require("./middlewares/errorHandler");
const app = express();

const cors = require('cors')  //! Used For giving the permission to browser

app.use(cors());
//! Connect to mongodb

mongoose
  .connect("mongodb://localhost:27017/Voting")
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//! Middlewares
app.use(express.json());

//!Routes

app.use("/", router);
app.use("/admin", adminrouterP);
app.use("/admin", adminrouterVP);
app.use("/admin", adminrouterMS);
app.use("/admin", adminrouterS);
app.use("/admin", adminrouterSociety);
app.use("/admin", adminrouterVoteSci);
app.use("/admin", adminrouterVoteArt);
app.use("/admin", adminrouterVoteMusic);
app.use("/admin", adminrouterVoteDebate);
app.use("/admin", adminrouterVoteSport);

//!error handler

app.use(errorHandler);

//! Start the server

const PORT = 8000;

app.listen(PORT, console.log(`Server is up and running on localhost:${PORT}`));