const express = require("express");
const {router} = require("./routes/WorkingWithFiles");

const app = express();
const port = 3111;

app.listen(port, (err) => {
    if (err) {
        console.error(`Server startup error: ${err}`);
        return;
    }
    console.log(`The server is located at http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use.`);
    } else {
        console.error(err);
    }
});

app.use(express.json());
app.use("/api", router);
