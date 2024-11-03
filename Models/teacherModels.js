import react from 'react';
import mongoose from 'mongoose';


const teacherSchema = new mongoose.Schema({
    name: String,
    Subject: String,
    email:String,
})

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;