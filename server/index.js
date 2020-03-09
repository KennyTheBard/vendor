const express = require('express');
const audit = require('./services/audit_service.js');

audit.setUpDatabase();

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    audit.saveAudit(req.body);
    res.sendStatus(201).send();
});

port = 8080
app.listen(port, () => console.log('App is listening on port ' + port));