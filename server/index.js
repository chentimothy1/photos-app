import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();

// every route inside postRoutes will start with posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//route for posts
app.use('/posts', postRoutes);

//route for users
app.use('/user', userRoutes);


// const CONNECTION_URL = 'mongodb+srv://timothychen:timothyspassword@cluster0.ixmty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// prevents warnings in console
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // if the call is successful
    .then(() => app.listen(PORT, () => console.log(`Server's running on port: ${PORT}`)))
    // if error
    .catch((error) => console.log(error.message));

// prevents warnings in console
mongoose.set('useFindAndModify', false);