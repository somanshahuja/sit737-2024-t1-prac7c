// Import the Express framework and create an instance of the app
const express = require("express");
const app = express();

// Define functions to perform mathematical operations
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

const subTwoNumber = (n1, n2) => {
    return n1 - n2;
}

const multiplyTwoNumber = (n1, n2) => {
    return n1 * n2;
}

// Define routes to handle HTTP GET requests
// Each route takes query parameters n1 and n2 to perform operations
app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/subTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = subTwoNumber(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/multiplyTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = multiplyTwoNumber(n1, n2);
    res.json({ statuscode: 200, data: result });
});

// Define a default route to handle requests to the root URL
app.get("/", (req, res) => {
    const htmlResponse = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(htmlResponse));
});

// Log the results of mathematical operations to the console
console.log(addTwoNumber(4, 3));
console.log(subTwoNumber(4, 3));
console.log(multiplyTwoNumber(4, 3));

// Set the port number for the server to listen on
const port = 3040;

// Start the Express app and listen for incoming requests on the specified port
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
