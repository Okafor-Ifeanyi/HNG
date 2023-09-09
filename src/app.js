import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import formData from 'express-form-data';
import connectDb from './DB/connect.js';
import rootRoute from './routes/index.route.js';
import logger from 'morgan';

const app = express()
app.use(formData.parse());
app.use(logger('dev'));
app.use(
  cors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'POST, GET, PUT, PATCH, DELETE',
    credentials: true,
  })
);


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api?', rootRoute)

//creating a port for the server
const port = process.env.PORT || 5000


app.listen(port, async () => {
		console.log(`Server don start for ${port}...`);
		await connectDb();
	});

