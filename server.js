const express = require('express');
const app = express();

const port = 3002;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.get('/', function (req, res) {
  res.sendFile(`${base}/device-list.html`);
});

// app.use((req, res) => {
//   res.status(404).send('404 Error: Page not found');
// });

app.get('/register-device', (req, res) => {
  res.sendFile(`${base}/register-device.html`);
});

app.get('/iot-applications', (req, res) => {
  res.sendFile(`${base}/iot-applications.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${base}/404.html`);
});