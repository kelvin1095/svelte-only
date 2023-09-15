const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

const port = process.env.PORT || 3000;
server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Closing server gracefully...");

  server.close(() => {
    console.log("Server closed. Exiting process.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM signal. Closing server gracefully...");

  server.close(() => {
    console.log("Server closed. Exiting process.");
    process.exit(0);
  });
});
