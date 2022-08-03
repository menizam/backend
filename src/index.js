const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routers');

//db connection
const db = require('./database/db');
db.authenticate()
	.then(() => {
		console.log('db connected');
	})
	.catch((error) => {
		console.log('error' + error);
	});

app.use(cors('*'));
app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
	console.log('server started on port 4001');
});
