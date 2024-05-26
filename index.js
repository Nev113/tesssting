const express = require('express')
const cors = require('cors')
const { makeSockets } = require('./functions')

const { download } = require('chromium-download')

const app = express();
let sock;
function main() {
app.use(cors());
const exec = download()
console.log(`Downloaded Chromium to ${exec}`)
download({ revision: 123 })
  .then((exec) => console.log(`Downloaded Chromium to ${exec}`))
  .catch((error) => console.error(error))

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get("/:number/:message", (req, res) => {
    if (!sock) {
        res.send('No client connected');
        return;
    }
    sock.sendText(`${
        req.params.number
    }@c.us`, `${
        req.params.message
    }`);
    res.send('Message sent!');
    }
);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
    }
);
}

makeSockets().then(client => {
    sock = client;
}).catch(error => {
    console.error(error);
});


main();