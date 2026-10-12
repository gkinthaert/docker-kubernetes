const express = require('express');
const os = require('os');

const app = express();
const port = 80;
const color = 'blue';
const hostname = os.hostname();

const delay_startup = process.env.DELAY_STARTUP === 'true';
const fail_liveness = process.env.FAIL_LIVENESS === 'true';
const fail_readiness = process.env.FAIL_READINESS === 'true' ? Math.random() < 0.5 : false;

console.log(`Delay Startup: ${delay_startup}`);
console.log(`Fail Liveness: ${fail_liveness}`);
console.log(`Fail Readiness: ${fail_readiness}`);

app.get('/', (req, res) => {
  res.send(`<h1 style="color:${color};">Hello World!</h1>
    <h2>Hostname: ${os.hostname()}</h2>`);
});

app.get('/api', (req, res) => {
  const format = req.query.format; //locahhost/api?format=text
  
  if (format === 'json') {
    
    return res.json({
      color,
      hostname,
    });
  } else {
    return res.send(`Color: ${color}, Hostname: ${hostname}`);      
  
  }
});

app.get('/ready', (req, res) => {
  if (fail_readiness) {
    return res.sendStatus(503);
  }
  return res.sendStatus(200);
});

app.get('/up', (req, res) => {
    return res.sendStatus(200);
}); 


app.get('/health', (req, res) => {
  if (fail_liveness) {
    return res.sendStatus(503);
  }
  return res.sendStatus(200);
});

if (delay_startup) {
  const start = Date.now();
  // purposefully delay the startup for 60 seconds to simulate a slow startup
  while (Date.now() - start < 60000) {
    // Delay for 60 seconds
  }
} 

app.listen(port, () => {
  console.log(`Color API is listenting on port ${port}`);
});