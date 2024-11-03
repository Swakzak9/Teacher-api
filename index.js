import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './Routes/teacherRoutes.js';
const app =express();

dotenv.config()
app.use(cors());
app.use(express.json());

app.use('/', route)

const PORT = 5000 || process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Your Database is connected');

  app.listen(PORT, () => {
     console.log(`Server is up and running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('Database is not connected', err);
}); 
 
